import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const LogoSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 290px;
	height: calc(100% - 560px);

	img {
		width: 272px;
		height: 92px;
		margin-top: auto;
	}
`

export const SearchSection = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Search = styled.div`
	display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  max-width: 584px;
`;

export const SearchIcon = styled.div`
	color: #9aa0a6;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: #9aa0a6;
  }	
`;

export const SearchInput = styled.input`
	display: flex;
	flex: 1;
	height: 40px;
	background-color: transparent;
	border: none;
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.87);
	word-wrap: break-word;
	outline: none;
	height: 34px;
	font-size: 16px;
`;

export const MicIcon = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
	border: 0;
	background: transparent;
	outline: none;
	padding: 0 8px;
	width: 40px;
	line-height: 44px;
	height: 44px;

	svg {
		height: 24px;
		width: 24px;
		vertical-align: middle;
	}
`;

export const ButtonSection = styled.div`
	display: flex;
	justify-content: center;
	height: 70px;
	padding-top: 18px;
	top: 3px;
	z-index: 0;

	button {
		background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
	}
`;