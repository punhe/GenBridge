import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const FeePaymentScreen = ({ navigation }) => {
  const [balance, setBalance] = useState(500000); // Số dư hiện tại
  const [requiredFee] = useState(1000000); // Học phí cần đóng
  const [depositAmount, setDepositAmount] = useState(''); // Số tiền muốn nạp
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showDepositInput, setShowDepositInput] = useState(false);

  const paymentMethods = [
    { id: 1, name: 'Ví MoMo', icon: '💰' },
    { id: 2, name: 'Ngân hàng', icon: '🏦' },
    { id: 3, name: 'Thẻ tín dụng', icon: '💳' },
  ];

  // Xử lý nạp tiền
  const handleDeposit = () => {
    if (!depositAmount || parseInt(depositAmount) <= 0 || !selectedMethod) {
      Alert.alert('Thông báo', 'Vui lòng kiểm tra số tiền và phương thức nạp tiền!');
      return;
    }

    const amount = parseInt(depositAmount);
    
    Alert.alert(
      'Xác nhận nạp tiền',
      `Bạn muốn nạp ${amount.toLocaleString()} VND qua ${selectedMethod}?`,
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xác nhận',
          onPress: () => {
            // Cập nhật số dư
            setBalance(prevBalance => prevBalance + amount);
            setDepositAmount('');
            setShowDepositInput(false);
            Alert.alert('Thành công', 'Nạp tiền thành công!');
          },
        },
      ]
    );
  };

  // Xử lý thanh toán học phí
  const handlePayFee = () => {
    if (balance < requiredFee) {
      Alert.alert('Thông báo', 'Số dư không đủ để thanh toán học phí. Vui lòng nạp thêm tiền!');
      return;
    }

    Alert.alert(
      'Xác nhận thanh toán học phí',
      `Bạn muốn thanh toán học phí ${requiredFee.toLocaleString()} VND?`,
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xác nhận',
          onPress: () => {
            setBalance(prevBalance => prevBalance - requiredFee);
            Alert.alert('Thành công', 'Thanh toán học phí thành công!');
            navigation.navigate('Home');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Thanh Toán Học Phí</Text>
          <Text style={styles.subtitle}>Kỳ học: Học kỳ 1 2024-2025</Text>
        </View>

        {/* Card hiển thị thông tin tài chính */}
        <View style={styles.card}>
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Số dư hiện tại</Text>
            <Text style={styles.balanceAmount}>{balance.toLocaleString()} VND</Text>
          </View>
          
          <View style={styles.separator} />
          
          <View style={styles.feeSection}>
            <Text style={styles.feeLabel}>Học phí cần đóng</Text>
            <Text style={styles.feeAmount}>{requiredFee.toLocaleString()} VND</Text>
          </View>
        </View>

        {/* Phần nhập số tiền nạp */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nạp tiền vào tài khoản</Text>
          {!showDepositInput ? (
            <TouchableOpacity
              style={styles.depositButton}
              onPress={() => setShowDepositInput(true)}
            >
              <Text style={styles.depositButtonText}>+ Nạp thêm tiền</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.depositSection}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập số tiền muốn nạp"
                  keyboardType="numeric"
                  value={depositAmount}
                  onChangeText={setDepositAmount}
                />
                <Text style={styles.currencyLabel}>VND</Text>
              </View>
              
              <Text style={styles.subsectionTitle}>Chọn phương thức nạp tiền</Text>
              <View style={styles.methodsGrid}>
                {paymentMethods.map((method) => (
                  <TouchableOpacity
                    key={method.id}
                    style={[
                      styles.methodButton,
                      selectedMethod === method.name && styles.selectedMethod,
                    ]}
                    onPress={() => setSelectedMethod(method.name)}
                  >
                    <Text style={styles.methodIcon}>{method.icon}</Text>
                    <Text
                      style={[
                        styles.methodText,
                        selectedMethod === method.name && styles.selectedMethodText,
                      ]}
                    >
                      {method.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity 
                style={[
                  styles.confirmDepositButton,
                  (!depositAmount || !selectedMethod) && styles.buttonDisabled
                ]} 
                onPress={handleDeposit}
                disabled={!depositAmount || !selectedMethod}
              >
                <Text style={styles.confirmDepositButtonText}>
                  Nạp {depositAmount ? parseInt(depositAmount).toLocaleString() : 0} VND
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Nút thanh toán học phí */}
        <TouchableOpacity 
          style={[
            styles.payFeeButton,
            balance < requiredFee && styles.buttonDisabled
          ]} 
          onPress={handlePayFee}
          disabled={balance < requiredFee}
        >
          <Text style={styles.payFeeButtonText}>
            Thanh toán học phí {requiredFee.toLocaleString()} VND
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A2138',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  balanceSection: {
    marginBottom: 15,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2138',
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: 15,
  },
  feeSection: {
    marginTop: 15,
  },
  feeLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  feeAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2138',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A2138',
    marginBottom: 12,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A2138',
    marginTop: 20,
    marginBottom: 12,
  },
  depositSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: '#1A2138',
  },
  currencyLabel: {
    paddingRight: 16,
    fontSize: 16,
    color: '#666',
  },
  depositButton: {
    backgroundColor: '#F0F2F8',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  depositButtonText: {
    color: '#5667FD',
    fontSize: 16,
    fontWeight: '600',
  },
  methodsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  methodButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  selectedMethod: {
    backgroundColor: '#5667FD',
    borderColor: '#5667FD',
  },
  methodIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  methodText: {
    fontSize: 14,
    color: '#1A2138',
    fontWeight: '500',
  },
  selectedMethodText: {
    color: '#FFFFFF',
  },
  confirmDepositButton: {
    backgroundColor: '#5667FD',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  payFeeButton: {
    backgroundColor: '#5667FD',
    margin: 20,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#B4B4B4',
  },
  confirmDepositButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  payFeeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeePaymentScreen;