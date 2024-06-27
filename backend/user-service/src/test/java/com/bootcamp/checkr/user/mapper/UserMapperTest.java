package com.bootcamp.checkr.user.mapper;

import com.bootcamp.checkr.user.dto.UserDTO;
import com.bootcamp.checkr.user.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserMapperTest {

    @InjectMocks
    private UserMapper userMapper;

    @Mock
    private ModelMapper modelMapper;

    private User firstUser;
    private UserDTO firstUserDto;

    @BeforeEach
    void setup() {
        firstUser = new User();
        firstUser.setName("Saiprabhu");
        firstUser.setPassword("Prabhu@123");
        firstUser.setEmail("sai@gmail.com");

        firstUserDto = new UserDTO();
        firstUserDto.setName("vikram");
        firstUserDto.setPassword("vikram@12");
        firstUserDto.setEmail("vikram@gmail.com");
    }

    @DisplayName("JUnit test for converting entity to dto")
    @Test
    void entityToDtoTest() {
        Mockito.when(modelMapper.map(firstUser, UserDTO.class)).thenReturn(firstUserDto);

        UserDTO userDto = userMapper.convertToUserDTO(firstUser);
        assertNotNull(userDto);

        Mockito.when(modelMapper.map(firstUser, UserDTO.class)).thenThrow(new NullPointerException("NullPointerException in converting to dto"));
        Exception exception = assertThrows(NullPointerException.class, () -> {
            userMapper.convertToUserDTO(firstUser);
        });
        assertEquals("NullPointerException in converting to dto", exception.getMessage());
    }

    @DisplayName("JUnit test for converting dto to entity")
    @Test
    void dtoToEntityTest() throws Exception {
        Mockito.when(modelMapper.map(firstUserDto, User.class)).thenReturn(firstUser);

        User user = userMapper.convertToUser(firstUserDto);
        assertNotNull(user);

        Mockito.when(modelMapper.map(firstUserDto, User.class)).thenThrow(new NullPointerException("NullPointerException in converting to entity"));
        Exception exception = assertThrows(NullPointerException.class, () -> {
            userMapper.convertToUser(firstUserDto);
        });
        assertEquals("NullPointerException in converting to entity", exception.getMessage());
    }
}
