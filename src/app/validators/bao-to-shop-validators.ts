import { FormControl, ValidationErrors } from "@angular/forms";

export class BaoToShopValidators {
  // whitespace validation
  static notOnlyWhitespace(control: FormControl) : ValidationErrors | null {
    // check if string only contains whitespace
    if ((control.value != null) && (control.value.trim().length === 0)) {
      // invalid, return error object
      return { 'notOnlyWhitespace': true };
    }
    else {
      // valid, return null
      return null;
    }
  }

  static minLengthWithoutSpaces(minLength: number) {
    return (control: FormControl): ValidationErrors | null => {
      // Nếu control rỗng, không báo lỗi này (để validator required xử lý)
      if (!control.value) {
        return null;
      }

      // Xóa khoảng trắng và kiểm tra độ dài
      const trimmedText = control.value.replace(/\s/g, '');
      if (trimmedText.length < minLength) {
        return { 'minLengthNonSpace': {
            requiredLength: minLength,
            actualLength: trimmedText.length
          }
        };
      }
      return null;
    };
  }
}
