import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

export default class TopBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeOpen: true,
      assets: 100000,
    };
  }
  render() {
    const { eyeOpen, assets } = this.state;
    return (
      <View style={styles.outer}> 
        <View style={styles.banner}>
          <Image
            style={styles.bannerIcon}
            source={{
              uri: "https://xqimg.imedao.com/175b6c2d9b4154d93fe59fff.png",
            }}
          />
          <View>
            <Text>雪球私募</Text>
          </View>
          <TouchableWithoutFeedback onPress={() => {this.setState({eyeOpen: !eyeOpen})}}>
            <Image
              style={styles.bannerEye}
              source={{
                uri: eyeOpen
                  ? "https://xqimg.imedao.com/170c86c0b7a45123fe82baee.png"
                  : "https://xqimg.imedao.com/170c86c0b6c1a55c3fd1fe32.png",
              }}
            ></Image>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.cardBorder}>
          <View>
            <Text style={styles.assetsName}>总资产</Text>
            <Text style={styles.assetsValue}>{assets}</Text>
          </View>
          <View style={styles.assetsDetail}>
            <View style={styles.assetsDetailItem}>
              <Text style={styles.assetsDetailItemText}>资产</Text>
              <Text style={styles.assetsDetailItemText}>12312</Text>
            </View>
            <View style={styles.assetsDetailItem}>
              <Text style={styles.assetsDetailItemText}>累计收益</Text>
              <Text style={styles.assetsDetailItemText}>12312312</Text>
            </View>
          </View>
        </View>
        <View style={styles.iconSection}>
          <View style={styles.iconSectionItem}>
            <Image
              style={styles.iconSectionItemIcon}
              source={{
                uri: "https://xqimg.imedao.com/170c86c0c1f44723fce0aaf8.png",
              }}
            />
            <Text style={styles.iconSectionItemText}>个人中心</Text>
          </View>
          <View style={styles.iconSectionItem}>
          <Image
            style={styles.iconSectionItemIcon}
            source={{
              uri: "https://xqimg.imedao.com/170c86c0c4045063feab0a63.png",
            }}
          />
          <Text style={styles.iconSectionItemText}>我的订单</Text>
          </View>
          <View style={styles.iconSectionItem}>
          <Image
            style={styles.iconSectionItemIcon}
            source={{
              uri: "https://xqimg.imedao.com/170c86c0c1f443d3fc426674.png",
            }}
          />
          <Text style={styles.iconSectionItemText}>联系客服</Text>
          </View>
          <View style={styles.iconSectionItem}>
          <Image
            style={styles.iconSectionItemIcon}
            source={{
              uri: "https://xqimg.imedao.com/170c86c0c921a78a3feb819b.png",
            }}
          />
          <Text style={styles.iconSectionItemText}>常见问题</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    marginHorizontal: 16,  
  },
  banner: {
    // display: flex,
    flexDirection: "row",
    height: 40,
    // marginHorizontal: 10,
    alignItems: "center",
  },
  bannerIcon: {
    // display: ,
    height: 20,
    width: 20,
    marginRight: 5,
  },
  bannerEye: {
    position: "absolute",
    right: 0,
    height: 20,
    width: 20,
  },
  cardBorder: {
    padding: 10,
    marginBottom: 16,
    height: 130,
    backgroundColor: '#f3bc92',
    borderRadius: 12,
    // shadowColor: '#f3bc92',
    // shadowOffset: {
    //   width: 5,
    //   height: 5
    // },
    // shadowOpacity: 0.5,
  },
  assetsName: {
    fontSize: 12,
    color: 'white'
  },
  assetsValue: {
    fontSize: 40,
    color: 'white'
  },
  assetsDetail: {
    paddingTop: 8,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: 'white',
  },
  assetsDetailItem: {
    flexDirection: 'column',
    flex: 1,
    
  },
  assetsDetailItemText: {
    textAlign: "center",
    color: 'white',
    fontSize: 12,
    // fontFamily: "DIN-"
  },
  iconSection: {
    flexDirection: 'row',
  },
  iconSectionItem: {
    flex: 1,
    alignItems: 'center'
  },
  iconSectionItemText: {
    marginTop: 5,
    fontSize: 12,
  },
  iconSectionItemIcon: {
    height: 24,
    width: 24,
  }
});
