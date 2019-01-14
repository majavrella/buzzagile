import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RootContainer } from 'components/AppStyledComponents';
import { images } from 'assets/images';
import RoundedButtonFilled from 'components/RoundedButtonFilled';
import Logo from 'components/Logo';
import CustomText from 'components/CustomText';
import CustomInput from 'components/CustomInput';
import CustomBackButton from 'components/CustomBackButton';

class PhoneVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: '',
    };
  }

  onPressDone = () => {
    alert('Done clicked');
  }

  onChangeVerificationCode = (verificationCode) => {
    this.setState({
      verificationCode,
    });
  }

  render() {
    return (
      <RootContainer style={{ padding: 10 }}>
        <CustomBackButton
          imagebg={ images.tick }
          onPress={ () => this.props.navigation.goBack() }
        />
        <View style={{ flex: 1.5, alignItems: 'center' }}>
          <Logo />
        </View>
        <View style={{ flex: 0.4, alignItems: 'center' }}>
          <CustomText title="We transfer your prize money via paytm" />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <CustomInput
            placeholder="Enter verification code"
            text={ this.state.verificationCode }
            onChange={ this.onChangeCode }
          />
          <RoundedButtonFilled
            imagebg={ images.nextButtonImage }
            onPress={ this.onPressDone }
          />
        </View>

      </RootContainer>
    );
  }
}

PhoneVerification.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PhoneVerification;
