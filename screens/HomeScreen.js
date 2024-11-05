import { View, Text, Pressable, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderText from '../components/headerText';
import SearchInput from '../components/home/searchInput';
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../theme';
import TeacherItem from '../components/home/teacherItem';
import { areaFilters, institutionData, subjectFilters, teacherData } from '../assets/data/data';
import InstitutionItem from '../components/home/institutionItem';
import SectionHeader from '../components/home/sectionHeader';
import AreaFilter from '../components/home/areaFilter';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('Đã đến lớp');
  const [teachers, setTeachers] = useState(teacherData);
  const [institutions, setInstitutions] = useState(institutionData);
  const [teachersFilterVisible, setTeachersFilterVisible] = useState(false);
  const [institutionsFilterVisible, setInstitutionsFilterVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchChange = (searchQuery) => {
    setSearchQuery(searchQuery);
    setTeachersFilterVisible(false);
    setInstitutionsFilterVisible(false);

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredTeachers = teacherData.filter((teacher) => teacher.name.toLowerCase().includes(lowerCaseQuery));
    setTeachers(filteredTeachers);

    const filteredInstitutions = institutionData.filter((institution) => institution.name.toLowerCase().includes(lowerCaseQuery));
    setInstitutions(filteredInstitutions);
  };

  const getLocalGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Chào buổi sáng';
    } else if (hour < 18) {
      return 'Chào buổi chiều';
    } else {
      return 'Chào buổi tối';
    }
  };

  const handleSignOut = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView className="bg-bgWhite px-7 pt-5 pb-[-35px] flex-1">
      {/**============= Khu vực tiêu đề =================== */}
      <View className="flex flex-row items-center justify-between">
        <View>
          <HeaderText text={getLocalGreeting()} />
          <Text className="font-exo font-semibold text-lg">Lê Mạnh Hùng</Text>
        </View>
        <View>
          <Pressable onPress={() => setDropdownVisible(!dropdownVisible)}>
            <Icon name="user-circle" size={62} color={themeColors.darkGrayText} />
          </Pressable>
          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity onPress={handleSignOut} style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/** ================ Ô tìm kiếm và tình trạng đến lớp ========================= */}
      <View className="flex flex-col items-start my-7">
        <View className="flex flex-row items-center justify-between w-full">
          <View className="flex-1">
            <SearchInput
              placeholder={'Tìm kiếm'}
              value={searchQuery}
              onChange={handleSearchChange}
              Icon={MagnifyingGlassIcon}
            />
          </View>
          <Pressable className="ml-3">
            <AdjustmentsVerticalIcon size={28} color={themeColors.darkGrayText} />
          </Pressable>
        </View>

        {/** Tình trạng đến lớp */}
        <Text className="text-darkGrayText text-lg mt-2">
          Hôm nay: <Text className="font-semibold text-green-600">{attendanceStatus}</Text>
        </Text>
      </View>

      {/** ========================= Các chức năng nhanh =========================== */}
      <View className="flex flex-row flex-wrap justify-between mb-4">
        <Pressable className="w-[30%] mb-4 items-center" onPress={() => navigation.navigate('ClassWorkScreen')}>
          <Icon name="book" size={40} color={themeColors.bgPurple} />
          <Text className="text-center mt-2">Bài tập</Text>
        </Pressable>

        <Pressable className="w-[30%] mb-4 items-center" onPress={() => navigation.navigate('GradeScreen')}>
          <Icon name="chart-line" size={40} color={themeColors.bgPurple} />
          <Text className="text-center mt-2">Bảng điểm học tập</Text>
        </Pressable>

        <Pressable className="w-[30%] mb-4 items-center" onPress={() => navigation.navigate('ScheduleScreen')}>
          <Icon name="calendar-alt" size={40} color={themeColors.bgPurple} />
          <Text className="text-center mt-2">Thời khóa biểu</Text>
        </Pressable>

        <Pressable className="w-[30%] mb-4 items-center" onPress={() => navigation.navigate('LectureScreen')}>
          <Icon name="chalkboard-teacher" size={40} color={themeColors.bgPurple} />
          <Text className="text-center mt-2">Bài giảng, tài liệu học tập</Text>
        </Pressable>

        <Pressable className="w-[30%] mb-4 items-center" onPress={() => navigation.navigate('LeaveRequestScreen')}>
          <Icon name="clipboard" size={40} color={themeColors.bgPurple} />
          <Text className="text-center mt-2">Xin nghỉ học</Text>
        </Pressable>

        <Pressable className="w-[30%] mb-4 items-center" onPress={() => navigation.navigate('ExamScreen')}>
          <Icon name="pen" size={40} color={themeColors.bgPurple} />
          <Text className="text-center mt-2">Bài kiểm tra, kì thi</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="h-full w-full">
        {/** ========================= Khu vực Giáo viên =========================== */}
        <View style={{ marginTop: 8 }}>
          <SectionHeader
            title={'Giáo viên phụ trách'}
            onFilterPress={() => setTeachersFilterVisible(!teachersFilterVisible)}
            tintColor={teachersFilterVisible ? themeColors.bgPurple : themeColors.lightGrayText}
          />

          <FlatList
            data={teachers}
            horizontal
            contentContainerStyle={{ paddingVertical: 16 }}
            renderItem={({ item }) => <TeacherItem teacher={item} />}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/** ========================= Khu vực Cơ sở giáo dục =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Thông tin nổi bật'}
            onFilterPress={() => setInstitutionsFilterVisible(!institutionsFilterVisible)}
            tintColor={institutionsFilterVisible ? themeColors.bgPurple : themeColors.lightGrayText}
          />

          {institutionsFilterVisible && (
            <View className="flex flex-col mt-5 space-y-2">
              <AreaFilter filters={areaFilters} />
            </View>
          )}

          <View className={`w-full bg-transparent ${institutionsFilterVisible ? 'pt-0' : 'pt-4'}`}>
            {institutions.map((institution, index) => (
              <InstitutionItem institution={institution} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dropdownMenu: {
    position: 'absolute',
    right: 0,
    top: 70, // Adjust this based on your layout
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    zIndex: 1000,
    minWidth: 150, // Ensure there's enough width for the text
  },
  dropdownItem: {
    padding: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'left',
  },
});