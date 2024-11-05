import { View, Text, Pressable, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderText from '../components/headerText';
import { getLocalGreeting } from '../utils/helpers';
import SearchInput from '../components/home/searchInput';
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../theme';
import TeacherItem from '../components/home/teacherItem';
import { areaFilters, institutionData, subjectFilters, teacherData } from '../assets/data/data';
import InstitutionItem from '../components/home/institutionItem';
import SectionHeader from '../components/home/sectionHeader';
import AreaFilter from '../components/home/areaFilter';
import SubjectFilter from '../components/home/subjectFilter';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('Đã đến lớp');
  const [teachers, setTeachers] = useState(teacherData);
  const [institutions, setInstitutions] = useState(institutionData);
  const [SelectedSubject, setSelectedSubject] = useState();
  const [teachersFilterVisible, setTeachersFilterVisible] = useState(false);
  const [institutionsFilterVisible, setInstitutionsFilterVisible] = useState(false);

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

  return (
    <SafeAreaView className="bg-bgWhite px-7 pt-5 pb-[-35px] flex-1">
      {/**============= Khu vực tiêu đề =================== */}
      <View className="flex flex-row items-center justify-between">
        <View className="">
          <HeaderText text={getLocalGreeting()} />
          <Text className="font-exo font-semibold text-lg">Lê Mạnh Hùng</Text>
        </View>
        <View className="bg-bgWhite shadow-xl rounded-xl">
          <Icon name="user-circle" size={62} color={themeColors.darkGrayText} />
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
        <View className="mt-2">
          <SectionHeader
            title={'Giáo viên phụ trách'}
            onFilterPress={() => setTeachersFilterVisible(!teachersFilterVisible)}
            tintColor={teachersFilterVisible ? themeColors.bgPurple : themeColors.lightGrayText}
          />

          {teachersFilterVisible && (
            <View className="flex flex-col my-5 space-y-2">
              <AreaFilter filters={areaFilters} />
              <SubjectFilter filters={subjectFilters} onSubjectSelect={(subject) => setSelectedSubject(subject)} />
            </View>
          )}

          <FlatList
            data={teachers}
            horizontal
            className="w-full py-4 bg-transparent"
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
