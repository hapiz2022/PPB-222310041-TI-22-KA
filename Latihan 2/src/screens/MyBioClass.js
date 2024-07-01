import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class MyBioClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyBio: {
        identity: {
          npm: 222310041,
          firstname: "HAPIZ",
          middlename: "ILHAM",
          lastname: "MAULANA",
        },
        educations: [
          { id: 1, school: "SDN 1 Kota Bogor" },
          { id: 2, school: "SMPN 1 Kota Bogor" },
          { id: 3, school: "SMAN 1 Kota Bogor" },
        ],
        mobile_phone: "012054164",
        email: "222310041@student.ibik.ac.id",
        gender: 'M',
        tall_body: 175,
        weight_body: 64.5
      }
    };
  }

  render() {
    const { MyBio } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Biodata Class</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>NPM:</Text>
          <Text style={styles.value}>{MyBio.identity.npm}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{`${MyBio.identity.firstname} ${MyBio.identity.middlename} ${MyBio.identity.lastname}`}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Educations:</Text>
          {MyBio.educations.map(edu => (
            <Text key={edu.id} style={styles.value}>{edu.school}</Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Mobile Phone:</Text>
          <Text style={styles.value}>{MyBio.mobile_phone}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{MyBio.email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{MyBio.gender}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Tall Body:</Text>
          <Text style={styles.value}>{MyBio.tall_body} cm</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Weight Body:</Text>
          <Text style={styles.value}>{MyBio.weight_body} kg</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default MyBioClass;
