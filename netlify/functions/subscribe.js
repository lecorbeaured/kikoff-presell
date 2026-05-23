const PDF_BASE64 = "JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMgNCAwIFIgL0Y0IDYgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9CYXNlRm9udCAvSGVsdmV0aWNhIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMSAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EtQm9sZCAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyAvTmFtZSAvRjIgL1N1YnR5cGUgL1R5cGUxIC9UeXBlIC9Gb250Cj4+CmVuZG9iago0IDAgb2JqCjw8Ci9CYXNlRm9udCAvSGVsdmV0aWNhLU9ibGlxdWUgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YzIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKNSAwIG9iago8PAovQ29udGVudHMgMTMgMCBSIC9NZWRpYUJveCBbIDAgMCA2MTIgNzkyIF0gL1BhcmVudCAxMiAwIFIgL1Jlc291cmNlcyA8PAovRm9udCAxIDAgUiAvUHJvY1NldCBbIC9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUkgXQo+PiAvUm90YXRlIDAgL1RyYW5zIDw8Cgo+PiAKICAvVHlwZSAvUGFnZQo+PgplbmRvYmoKNiAwIG9iago8PAovQmFzZUZvbnQgL1phcGZEaW5nYmF0cyAvTmFtZSAvRjQgL1N1YnR5cGUgL1R5cGUxIC9UeXBlIC9Gb250Cj4+CmVuZG9iago3IDAgb2JqCjw8Ci9Db250ZW50cyAxNCAwIFIgL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSAvUGFyZW50IDEyIDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iago4IDAgb2JqCjw8Ci9Db250ZW50cyAxNSAwIFIgL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSAvUGFyZW50IDEyIDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iago5IDAgb2JqCjw8Ci9Db250ZW50cyAxNiAwIFIgL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSAvUGFyZW50IDEyIDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iagoxMCAwIG9iago8PAovUGFnZU1vZGUgL1VzZU5vbmUgL1BhZ2VzIDEyIDAgUiAvVHlwZSAvQ2F0YWxvZwo+PgplbmRvYmoKMTEgMCBvYmoKPDwKL0F1dGhvciAoRXJpYyBDb3N0ZSkgL0NyZWF0aW9uRGF0ZSAoRDoyMDI2MDUyMjEwMzkyOCswMCcwMCcpIC9DcmVhdG9yIChcKHVuc3BlY2lmaWVkXCkpIC9LZXl3b3JkcyAoKSAvTW9kRGF0ZSAoRDoyMDI2MDUyMjEwMzkyOCswMCcwMCcpIC9Qcm9kdWNlciAoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gXChvcGVuc291cmNlXCkpIAogIC9TdWJqZWN0IChIb3cgdG8gaW1wcm92ZSB5b3VyIGNyZWRpdCBzY29yZSBpbiA5MCBkYXlzKSAvVGl0bGUgKDkwLURheSBDcmVkaXQgU2NvcmUgRml4IFwyMDQgRnJlZSBDaGVhdHNoZWV0KSAvVHJhcHBlZCAvRmFsc2UKPj4KZW5kb2JqCjEyIDAgb2JqCjw8Ci9Db3VudCA0IC9LaWRzIFsgNSAwIFIgNyAwIFIgOCAwIFIgOSAwIFIgXSAvVHlwZSAvUGFnZXMKPj4KZW5kb2JqCjEzIDAgb2JqCjw8Ci9GaWx0ZXIgWyAvQVNDSUk4NURlY29kZSAvRmxhdGVEZWNvZGUgXSAvTGVuZ3RoIDE4MzUKPj4Kc3RyZWFtCkdiIWtzZ01ZYiomOk1sK2JbXUAkWyVcdTZaPlxTbz4lImhrYDVTSDk/UG5XW2Z1VHNeOFRFT2htdVdjRWExIT1QQE0sN2YmQmdsKEYkI21QNlFqO1hFVzpxN15uNS0zcj1vPkdfMD8jLCVVcDlpSmIvRVpbajA+N2FbMDYrQkdQLCxKRW9NQl9FPEduK2FGXlsyW3JvVTc6PDlaUF5QY1RKSXJNX0UsJEpTSkI/IVRNX09dTSN0QjhtLiFoKlgtK3M8RzIyJzc8aCFaSSFcZDFdLnJvNDJVXV4qTjhsdCIwSzguPS9bTywrb05saykoXTgqInJXLFNCSSk5L3Q1N2RrZV5rXlBqUlAiLiteMic0L2VtKEdQZ3FqLU9fcnJcRWQ8TG5CJWpDIyJEK1VQLEtZSmlrQSo5ZCVPKlItY2JFYUQwXUNAS0ZBZl1LdFNXIS0tJjsjM25cJUNNNU9BL28oSlxoJjw1X0pKMj9LbjBOcmlJIyIxXFdiWyFhak5FaD1DRkFQVVJlMFcuMkFJck0pbEZrJitcM2lwUCdpblRacWxDLiwiWWxKcDJQSWtLUmlBaFE9dWk6MVVyUStIODVlW09bWXRrUEckOi9fN1hwNF83WWdKQiFUQCw0LFEvMTVBbj8waUkyPTcqOlxfUiVJdGM7MElUNF5tOWJwWSxqPm5xOkpYRF1DZmU6Y2w7LTc2aE1gMi8hbk0hRVt1WXNNTl4pOCwoKjcwUk9iSGhxZDhmUnQ0LT5FJDZMa0k1Mz4iSGs7RGw7czlYaXU/VyklcmkxI1hwXilMUnRtSUVPLUcnWHBDcFhfLl5MbDc5WlskV0A5YVQkIlZUcS9KLChdVyVlcTFpUCRiTCFwPVBKMk90RExgYCFjSSFNUl0lQ0VNa2k8Z0JTU2xZdC9kZ2gpLlEnISdzQ1xwUkA+KTg9cXIhaGQsWFtVNHRvVXBBKls+NGxoNXM5Ol9DL2JZTTBYbj4hcHU6MF8zYkZCOFRLX0skPG1lOmVXZzltOWpzSzomM2ZGXEBQOHUmazQoN10hRVAuWFBXJVQkVmI/WDZlcFxyV3FOUj9HQzFMLlI3U1w2JWxmV288XERzNmo4L3EuNWFiZUAlb1NKMTJGW1YmMGQ0I0NOMGAnNUNSI2RaOmFwOT8taikuKXFkPWcobjA5U28sK0RzcnVSaSIlK2xmSzcnREU4ZG5cY29ecjdXPDxrLWhtKzY0M1pQWzwpQ0dSKlVhcCs4KjZRaC5xR3QwQE0jLjY+NjwkUWJvNltcL2dqKTdKZVBWb15XWSZnL2xjUCFSKlFqU0QnZHBrIWBAOiwxUDcmYSghOT5UcC9HUlJtJ2tWP2Q5aUpydFhRT0dRUSw0QVRDOkZzUERdRDFPanM5NWdnLFxaMmRJWGI4NyszOFFhVElnIlVwZT8vTFNRPDQ8bWtpKlo2QUlOb0tqQy4pZDE7T11USEM2VyU/bUxmPnI8XjBNc1lKLFQ9UW47K1cobFhdRGFUIy1NLFNHWyVANEk+Q0lnQ2FUMmViLWw+TTtIalUmIXR0MDMkT1FSMl5TZW5nQWRPM3JBPj1uLEkjXkA4VTxQMHE1dG9wTXBRXGtRZTdOTkFFVDdvRypjUiokQD4rcXNERnFKWyVYV0xgQVRVXmRWXC9rRl4mO3UhclcuM2BnVG1ObmtPRW1pJiwxOT9kXCJ0RkJwZUFaMCQ7O29oJzglTkhoVz9CRCEoWUJOS2hhRDpJaWdFNjBILDpwOzlXcC9GPzBBTy5zam5hT0FqI1QiPykhTnIyNVtRLXAtNGdjSyYyYVJ0ayJbOUFAZD5oYTg2bCRKSlwtJy9UXDJtaC5balRTSzNSSTc1P2Y2b2JaJEFrUFBjYXUtWyosP2xCcWE9WjpXRSQ/MiZRTVs4aioycltZYzBQTzQqJy82ZVFKWTEiV0ktPSYzJzppZlg5UXVOYk1MPkpNYycoXEFGLzVqX3FdMnBmMyJsQjZwNyRjLSlAV2dQIzlMYCQ5OjY8WXFzIyNsOmdxRixfMV5NJlUuXWYrLFlwMlwiQ1FPZ0AzVjpfK1VhZyY6P2NfTyc6cDNRRjIuNVVoW0BYUmUnU1YkPFBpRE1tXEYoRTR1RjQ1SmVqWFc8U2RjUlR0T2lga2AnWiN0O19JciIvIWhqcVBDTl05TEtGVFM9XkI9ODVLcU5KY1txRzcvX2BxQlJkKkEwL0pITjQ3PENIRFZCVE4rLm88IiEjK106XzpNbSwhJks3LlBVYHFvMkNKZl5mJFdUc1cxS0QxZjkrRm1xbD1sWUQyc2lXTCNkWCkjNiknb3FhKzg9J1omVzRgZD5pUkE/LkxnOltCMEpyYXFocUgzOm84OmFSRDxISVNAP3U/bG5GdGNEQi1GUDBRLzBCLzxPVHBEVFxwSUdIXGBhNjVNT2N0ZSk+YmtkMTtMVXFvJn4+ZW5kc3RyZWFtCmVuZG9iagoxNCAwIG9iago8PAovRmlsdGVyIFsgL0FTQ0lJODVEZWNvZGUgL0ZsYXRlRGVjb2RlIF0gL0xlbmd0aCAyMTI5Cj4+CnN0cmVhbQpHYiE7ZGhjJjhoJjpXZkdmXWMpbWRMTENPcywsWCNIVXBlQ1xTNyo9Ylg2I2YmW21rJFtCN3FDI2pHXUcvKG1mJU0lK1tqamUqbmg+LTdNKUc1KGs6IT84ZTFxTy1DRW1wZ1RoOHE4bDRjW2c+LCNPdUdvYF5gN1M4OCUvbDMmbCglLyZWVE5EVjtgRUtqWScwJD5mV15EKkpGTC1sNUQ7TVx1M1AwTHNfKUtaXlZRckppTWprbVY0LSpHNWQuUEFjZEFMQTJgLm5kPUNGJkFPTU1KJlVsM1JsYHBKSDJsSExaTStbMSo7IVNuUihraUNMUDJlJXI+Rj9KbjsqKFwjc0EtNUxzT1dITHAkZjUkSyk1bzxfXmhISEhYRz85WnA9dW40YmBZYik6P1lBLlNraiJCVSNmX3A9KV0rPDguVUpqPGtTQEFyYzo+bm5lPVRqQks2VjdfSGwsdGlMbShNa0Q/Uk1RQCEsa1dsR1JPbUVwLjJjdEZEbE9fI0VRYkFOMC42blNMbyxqNDZhUHFKT3IqJzFPTz9qN1tDQF1acG4kL0U/Kl11MylpXGEiTGNjSkJIY0RlcSNpWkBrZVAzVytcUy1qNyw9YmchOVFGMilLR0c6Ui5DdCpORzpiaSJKPm5saSpiWiEjVURUP2k7UUFCT2hLS2dJPFdLbCY0bEk1aFhxOT1pY11RZHNTPW4lQVg5KCdbailBcW5fUEEtKypeJ0FlPHFzdEU3aV5vZT0maydRZE4sKDIoI2RHUExDZVgsNGFPO2xEIStPWlFtIyhMJiciNyo9QDRbNWJLQF5xZ3FeODkjXDpPc2p1Sm90MXVEUm1TPEddMSNEM1BXY00tc0RfcnBaMC4hZkNIPiREQGpsPjtsRidqdG8pJSd0Myg9YyxlZ1pRPChVQF8hY1JcKSteXzRfdTIhQ1g8W01YXmlVazZRbUBYZWYiS29ONWpadTBiUl1fOmwwbUk8SCdaMFYobzBNR3BDUmAwMkNQSDU+R0A8SilVRnI3b2tHSi8vWjpCY1xtaVNcOWAjNzBDUiVMNSVlaWZbO1w5RGhdJm5HWFJ1RmFvcEVeRShhJkUhPGktcVc3bTJgMFcoNkJfKkU/QjVcbEs+R2NgWkdUJ0NEIVRxMEshJ3FqciJeQW8rIi02SnFGNSNhcm47OWRDLk87ZCw8Xy1QXltPT2tDXCRDN0JwWjREakNZO1guI2ZEN0BAZ2E0RlNgN0xmYT9udXUhJWZFRTtJRzlVc3Q4VVNjcGRGUlBxRyZfRTJIQC5VaWlcLFFjXSgocidpL0skQ1t1R1Q9KUlXOFBlbCcsakM6QC1jYGYpS29icD0paS1AYCxcLT4sYlEqUSxKTHBjRjBHJFIqcVVjU0RsME9ZTC9iOFgxaitaXS9kQ1A0OS9SRzNKOj08Lz1dZVszVHRwYig/JiZjanElKWlGV2RcI2NHL1VgUVAoIVgtc2UxKCdkOjJVPUJjZ09cPVMmRjVpSmRZOllRc11SbU8+SW9NTDs0PDYvW1I8MWsqYWRYRXBuamM/J1hCTWszPVVmUz4sXGhxM1VuUUlkOFQsblVTakZXWU1IQiFOIVVaKixfMCM4TV5JUWghWTVgPTRjLnJ0SzcjRW5TKm5FLT0nMFY3ZW8sUTBgY1pZcE5bJTZiTC5GTy9NXHVMJXFKJ24rQUhUY28sJTNjaC82Ii8/RVlvUyxAY188LFkySy0kblwkKDE5KjFmKTtlXG8rI0FiNmEiMjguK1JXaU1ZUj4tK14hW1NyKilxPydbKz1iLVhJJEcyOHQ+UENlTmwxRj5bM0UtPF5FK2BiYSpIYXI2cylvbydOY0dPUywxW2gjPkk/KzYzKjglQC1MRFslIjpALSE3X2pXK0U1T0Y+P0w6aHA7aicsNkFTT04zOkMwZGhZdW8sMmNROkpXTnBUJjJnXENxRDksVis+cU5wNDBKI0YwP1ZxSEFEVEFhQFJAJCJIYm0/NGYnNzIpWjVpUjRPQmhCRjxhQSolU0VpTjVGYW5NYXIsOTpvIUEnImpOUjVda11nSyRgWHU6VkhYYzgiXGsvOGJNdCUhN1NRNUFKcXI1NipxdSswMVsxLTktTHJMWW8tN2ZFdWNiZU9PWiQhSTJFRnRZPyRbQD8zaFg4Ki9DN0lpQ29EZlhfUU5XTmUtYUBZWUo/UyNAXjFpRzlIZmwmOjIvWSYwNkxTJkchdCkiTiNnSlVEbGJDXHB0YGdbQENOWW9xVkI/Zi0mKjQrOixbPSYuIjhoKzJnai81bkdCNVgpYGI/cEorPk8oPGtpWzFAIyROIlNmT29eUS9CQWBXbEwycSJrKV5kJHVfTTpCbF9DTEdMSGs1XzZBKz03dVRCLklhZyg+V3RDMjtJSFUiL2Q0PyZBXDBuXW1hYW5jLTAwOCcmT2NSUDhhYjdxRC5AU2AjaUQpQEJxUCVBNiFbIVQ1JF5bK3BScGtsU2JvXzFIJkNzRVFSLS5HYG5SIm9EOkptWkJiM2wzbitQZkNNSkk4MiQ7OlcvNCZpPVtJSFhTOWQpJiksJGJYRE5gQl5oNWFgdSttVDo1N049dHE8M10hWWBfTlorVStGXEc1RlZMOU4nT3RXKzw/TC1VczAlY00yLmk1W2A4P2pkREY5IyR0SjNhKjpXO3RaJTk/YlhmMzcoWCtyUEs4ImF1TiliU0UyXTJyNTNYRiZVSmkyJFhUZnRAMT5idF4xMyVsOk9SVFdnVU4xaShHVkcucShiKW5TJkVlJWhoRksrVDE9SGZJMClOVS1OLSkhblpdQ3FJYydXZ1o5MG4sQl5UbEY2alE8XyEtOVc8ZEp+PmVuZHN0cmVhbQplbmRvYmoKMTUgMCBvYmoKPDwKL0ZpbHRlciBbIC9BU0NJSTg1RGVjb2RlIC9GbGF0ZURlY29kZSBdIC9MZW5ndGggMTk2MAo+PgpzdHJlYW0KR2IhO2U+dVRjQSdSZi5HZ2tVJiJdPGgkMnJmJGEmQDQ9aHU+PF1DImRodUpGWFglJ2kua0JBSkgwSzg5T19mZjZPTC1qLygnPC5AUC00NidkQ0pFSTdQNm1Lcl9CQForLDlGZSw5dT91RSd1NnIhWkhOXnJTYyYyKlMuWS0sPFVvamYsOjRgU3RjTnAlY1ZoMThBY25MPyxxcVZjcFJPSCR0QktlczNbVVtdSCotcGdUUW1DKmBNTmwwO2JKQkJIa1Zsa2xvMWxyOiMmMiw/aCRMZSZUQT4nLlFxV2A+XV9FWzwkMGltRXFjbmBEZlA3USpNN2lLISswWi9CV2k+NE4xLCwqU041XV9XTSFGQTNtMTFSQi9xblJXNVxiYDBhVkgwJDhDOFNLMzRUKC9EXSI/Nk1eK1BwMmYyMWZMNS1tRWsxdT5nPC4uYTRPUzJIRUBAUzlCJTdHWCg/VUowP2MkRVFMWkxBJUxrLz9XSWU4OilDXzRzNEpXcDYjS2AzdT9WLlFlLUlNRWkwL0JkbFAxT0cqRWs6RjlSNTk1Lj0hcGBfTzI8VTs8bFtlZUFEZFtRLGdkYCRHYXRRO29oSnBWcGJCJThUaGpTJEMtZVcoNDNpQTFCVDlHJEBray09R1MnWU9sLW0iZ11VcC5bKGNgMSQrcj0+PCUwbSE9bC9vVCFALlMlamYxbT9nM3BhQm1IZW8sI24tSXEmWGhXXTRWNTAkJmxSKmErMmFRSmBqOCNDOCJSUj1VK0RnT19fMFMxUm4mbzdoTEFvNiRUbSUrSGVzJEpGJj1XcUonWlNYW1EoWUQhPXRAPXBubTIkPldldE9YKypdNTVSY1YzNz9uSEUuWlpgRl0lP089UUhCJEdUOkBWX0VhYWU1RjEpImouXVZAZG9oailSQFRjNVAvaEtCW1xAODltOFtsKywlPkFjLlpEZUYnTihUR0s0KFExbVxgSlU0bSNQTTlcQHE6V2ApOnNOJSkwIThOKFJnQmdTVnNmIVglY0hKW21YSFkpTGRfKU9VRGY/YiUoKUY1QDFMSWtdV2JAOT4nKE9iT11dKG1dMChdMjotZVluPT1gWlUuWiYvYFYlNSFEaSRWb2Q+bVJLaTZpXl05LFYqPFJWTyVlJS9BJk5cK1k2Pm5HYiFpKmYsXCs5Um8kIWQnYnBIREEmbnAxLzNtWktwL1AkP11zZElaSmFuRD1JRz5xaWdUWS1SVyRtXWdMOmBKSmpxVnIwLCMoZXE3ZDIhPz1ZcyomTCc5cj4qYzBqZUw+LUhCW0VkJWN1NCdNbDVUSXVkQiQ9Y3BTUi5zJjAnN05cb3JySV91M0xAKWtoTHNIdU8rTkknPkxNZW8kUXBOU1I9X2BqSktPPC9vTCVSUmJBK0NITXU2SipAaGQiOS41aUc1IVtASStjPTNCKFRWKWtCL0NMQk0yW1pXRSw5VC8sSU5Tayk2J0hJYWhGODFcJFwoPF0qPyFGdGMobFtkTS8rXk89bSM8USY8W1U0OVY3K0k4azliX1xbdDA4Q0c8PVFgY2NjSTNMTSIiUVhtLVpiYiE0RGY0bVY/ND4tbVBPVDRtb1VeY2RTdU8yJCtlUG5lJkg9TlktIXVXUnE3NXQwIlomUlBbXFdxP3BnREVqb1FnT2xVbnVXKS86aWYxbU5jYmVsLEhNUjQ0ayohQiZGc2pqNlJCVFxURmMsKl9bazpsPSkiQmYwW0AwakJCYCtvQDUrMz89XUIiSF9eXFYmQjVcI28xb1VFKl1YMCJAZy9hazo+aFkjW1xeSSNNOFIiKkI4NWs2I2JQMCZAWFoqWD41W1BbKCIhRzE+aSRAJmFbMUAiPFJxKSxGKW1eNVk9cDFaKUwtOi9kdHMpYj0rLVREOkcqWlsnYE9TWGV1IjdgKWs4TU1SVEplKDgyNipqaVNQTGZWdGNSQi1nOGU7XFtrSCE2PnQsNSEjMU4hTDJHcD4mTU1pPyZCSDtXdSZLSiVlYTY3SnA2Qk1BaSdNbVRURG1ZLyZgaShvUEY8WWtOU2QwLz4oMS1SSVd0JURnQFk6Q2lGI1IkXHA/SDQ7RltXSFZJL0UhXG1kLyJtMmE1Qyd0cjhMLlZMRGBQTyRQOj87V1RJdTMjIjwzPzlFYkFrQD4wWDw2K1JuQjkpVGkkIUovLyxBK1gnanJGRmw8JEI8MGIlWlVXI0FLU0JCX3IhbUw/SDxmPEglOGJxLjxsXWhOL0NHQW8kck5pJ0FBXkFmbGpWdDYuQS0kOCdrT3V0Ujx1ZD05bGtxREclWD4nMjRNPy4mY3UuSjBXZzdvN186N1Y5LSlibTEvX1tQQERZbUQlQiotVHRiLFdHKWU1azNMJzlVVUkodWFoSEVkLjo+MGBTMScsWjknLkkvMmJKT0RaUUBoNGdpbl4xVGFiUzBqW0wiJGRaMSpmbCRTXzIqbT89TCRFJjYtSVFoNG0ncSVBSCFaKUQ1TTVwN2srKDhWRkhzQiRAK3BOWG40QFhmZkZHVEgoPlEuRWtaY1ElJUQiPS5maV5YNy5HP0poZS9QbHBRIylXJVpiPm1rUGApaDpQVGIoYzFROyFTdSk+cHJRWyJLcSVLazg5MGB+PmVuZHN0cmVhbQplbmRvYmoKMTYgMCBvYmoKPDwKL0ZpbHRlciBbIC9BU0NJSTg1RGVjb2RlIC9GbGF0ZURlY29kZSBdIC9MZW5ndGggMTM2Mgo+PgpzdHJlYW0KR2IhI1s5bG8mSSZBQEMybSVLdGkxLF9NaFMlV29bMnNLdHBPUDYvc2lYOEczJm4ySk0hNzdiQmxoXlpTOGgqdGROZmtmQSwvPk11bUcjKiM3UFdhTkhvRC9UYygqWD1AKU5cSEdKcGQ4VVxYQk5JUW1Xa0EpIThvSlciKTs3MjleVW9kQzgmM1pRQ1IjJU1JZjVEc1FOJiZFU1o6VkQkbHI4TGBmWCdSYk9EQ01ZMGhEaEwiLSlrUlE3bWloKGVrbyFqaGNUME5UbjM0cUxOK0hROXRxaTNYRGddJUw/PitBcm1sI1wmJWlGXT5MXmQlaCdnUy9cdFotMkZWLytXajFNQildKS1jbVljJS5maUxZWCczL2pPLVk3KV1cUHVvajxiW01Ec0Y+dD88UzAlUXQjK24sP0k4OmlUUFdDI2wyK0Z0JGlLNVgtKjhFQXNUUExBbmhWWCdVXS5hZ1NIOG9tOWZbWyFuPlduWi1mUWkmO1FdWylNWDRONklaUzM9MmBiOUViVVslVXNIY1pgPGQtKz87OTElRjFDOiNeaUVWLj4hWHI/Z1snUj1nLk1EUkxNLXBHXllPQjAlbyEoPlBra18sZT9GQSZqTj1qbD5EIjxSYUM0X1hzbTRySGk/XidbMilTY0JxO2xnazI6PzhyailgKC1fLEhwXERcSzJhI0NuUzhdWTRoTGVgPkg2blA6Y2lqNSMhbFEzVl1bQ2ZvN0duRC5AUi8rcFU2NT0zYjYpbGdoUylzLFlANzpRdVtxXiU1bHFKYCNuWllUS041UTw/UjFzJ0crdSg/OW07aEwlOGREUGxGSEFsKXBkI0RJaW9OSSRfU2UxcTo9QTRiXTpwKF5WTmstYmAibG8vJk40NjxwI3MjYTdNbz4lbGBwLG5fOzJkS3FfbyEyQUEvS2xoQG49PHQkOjB0LS9YRzchamonUUpGI01RRyVKJF09OFkia2U2cj4jWVlNVEY8RSZFMTM1VzB0WTxFKEVAaSpOXGg3VV9lVE5nQVRBLS9yMiNldTFbMicmSVFpR3FdXmlTXlw6TG41VGR1VzZTRjVicSVZYz02Nl8+KHUrLVdIUC51Pl0uVmhcWHBdbiJVYztcQilxNFQkbkxkUTFpS1AlL3N0ZGAlZDhtRGFkI24kbUBaMVdtRnNDLWJjb25gKCtMWDhoJSJlM1tSc0QhLGMmWkYhI2A9KGRKVyJbdUZaamk8ay5ubmYpTSVZZGFJLlpXTEwvKDlbRENWJi8xW0MhWzpVUS1SSS9JTUgsND04cDlpW29YSjstYF9OIUQhJmhnNEpiPUhbPS49PixUViUrKnNvYzo+MUxmVS1aIm9LQTRiMDpTWl9uNmdVR2pXW0s8PzBFamE+VzNub3VRLzUpTlRbb3NTKztOPFdDXyZhNiZOMTlMVCtdJiIpV1orTDVXJm9nNVowV1AxLkdYP3JwJmBwWnNWbSxSXztcNiF0M2VSTCM1UyhLIUs1MSZcMmojImc2Sl1ZNTJUUE5ULiVuQFdnTExeLChEXXIkNi4uQ0NBKDFUSysyXk1jJHFIQTpaIkhkLyJTcz0vKWFANjsyam1Ic243SFhSJ2g9b1hKIWlsMjh0Jk41MENvZih1KyJKLGtZSUdQX188LCsoUFpTZzspZ3BAYkdaUyZ0ODJjWzdoSmQiPnRLMlVTbHAqKGk8alNQXE1qLHRJamc1MEhEYExqSkpMJV82bkgodCxNc2leQU0jLmthc1Q6OC9yWE5jTzhgSHAvXU4kRzh0bCokTGkhaCtTMXBbTC5UNypvXTIiSjdlZl9rMFJALX4+ZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgMTcKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDYxIDAwMDAwIG4gCjAwMDAwMDAxMjIgMDAwMDAgbiAKMDAwMDAwMDIyOSAwMDAwMCBuIAowMDAwMDAwMzQxIDAwMDAwIG4gCjAwMDAwMDA0NTYgMDAwMDAgbiAKMDAwMDAwMDY1MSAwMDAwMCBuIAowMDAwMDAwNzM0IDAwMDAwIG4gCjAwMDAwMDA5MjkgMDAwMDAgbiAKMDAwMDAwMTEyNCAwMDAwMCBuIAowMDAwMDAxMzE5IDAwMDAwIG4gCjAwMDAwMDEzODkgMDAwMDAgbiAKMDAwMDAwMTcyNiAwMDAwMCBuIAowMDAwMDAxODA0IDAwMDAwIG4gCjAwMDAwMDM3MzEgMDAwMDAgbiAKMDAwMDAwNTk1MiAwMDAwMCBuIAowMDAwMDA4MDA0IDAwMDAwIG4gCnRyYWlsZXIKPDwKL0lEIApbPDA3YmRlMDQ1MmU0MWU1NWY3ZDliZDliNmMzY2RlZjA0PjwwN2JkZTA0NTJlNDFlNTVmN2Q5YmQ5YjZjM2NkZWYwND5dCiUgUmVwb3J0TGFiIGdlbmVyYXRlZCBQREYgZG9jdW1lbnQgLS0gZGlnZXN0IChvcGVuc291cmNlKQoKL0luZm8gMTEgMCBSCi9Sb290IDEwIDAgUgovU2l6ZSAxNwo+PgpzdGFydHhyZWYKOTQ1OAolJUVPRgo=";

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let email = '';
  try {
    const body = JSON.parse(event.body);
    email = (body.email || '').trim().toLowerCase();
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email address' }) };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server misconfiguration' }) };
  }

  const payload = {
    from: 'Eric Coste <guide@ericcoste.com>',,
    to: [email],
    subject: 'Your Free 90-Day Credit Score Fix Guide',
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;">

        <!-- Header -->
        <tr><td style="background:#0d9e4e;padding:32px 40px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;line-height:1.3;">
            Your Free Credit Guide is Attached
          </h1>
          <p style="color:#d4f0df;margin:10px 0 0;font-size:14px;">
            90-Day Credit Score Fix — the exact steps to raise your score fast
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <p style="color:#333333;font-size:15px;line-height:1.6;margin:0 0 16px;">
            Thanks for downloading the guide. Your PDF is attached to this email.
          </p>
          <p style="color:#555555;font-size:14px;line-height:1.7;margin:0 0 16px;">
            Inside you will find:
          </p>
          <ul style="color:#555555;font-size:14px;line-height:1.9;margin:0 0 24px;padding-left:20px;">
            <li>The exact 90-day roadmap broken into 30-day phases</li>
            <li>How to pull your free credit reports and what to look for</li>
            <li>How to dispute errors with all 3 bureaus (step by step)</li>
            <li>How to fix your credit utilization fast</li>
            <li>The 5 rules that protect your score long-term</li>
            <li>A printable quick-win checklist for your first 7 days</li>
          </ul>

          <!-- CTA Box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#e8f7ee;border-radius:6px;margin:0 0 24px;">
            <tr><td style="padding:20px 24px;">
              <p style="color:#0a7a3c;font-size:14px;font-weight:700;margin:0 0 6px;">
                Recommended: Kikoff Credit Builder
              </p>
              <p style="color:#1e4d33;font-size:13px;line-height:1.6;margin:0 0 14px;">
                The guide recommends Kikoff as the fastest way to add positive payment history to all 3 bureaus. Plans start at just $5/month — no credit check, no deposit, no interest.
              </p>
              <a href="https://kikoff.pxf.io/c/7007975/2344833/14994"
                 style="display:inline-block;background:#0d9e4e;color:#ffffff;text-decoration:none;
                        padding:12px 28px;border-radius:50px;font-size:13px;font-weight:700;">
                Start Building Credit with Kikoff
              </a>
            </td></tr>
          </table>

          <p style="color:#999999;font-size:12px;line-height:1.6;margin:0;">
            You subscribed at kikoff.ericcoste.com. No spam, ever.
            <br>This email contains an affiliate link. A commission may be earned if you sign up via the link above.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8f8f8;padding:20px 40px;text-align:center;border-top:1px solid #eeeeee;">
          <p style="color:#aaaaaa;font-size:11px;margin:0;">
            &copy; ${new Date().getFullYear()} Eric Coste &mdash; kikoff.ericcoste.com
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`,
    attachments: [
      {
        filename: '90-Day-Credit-Score-Fix.pdf',
        content: PDF_BASE64,
      }
    ]
  };

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error('Resend error:', result);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send email', detail: result }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: result.id }),
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
