// code below is auto-generated from diagnosticsMessages.json by scripts/build-diagnostics

/* @internal */
export const enum DiagnosticCode {
  Unexpected_token = 100,
  Invalid_character = 115,
  Digit_expected = 120,
  An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal = 125,
  Unterminated_string_literal = 130,
  Unterminated_template_literal = 135,
  Unexpected_end_of_text = 140,
  Hexadecimal_digit_expected = 145,
  An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive = 150,
  Unterminated_Unicode_escape_sequence = 155,
  Binary_digit_expected = 160,
  Octal_digit_expected = 165,
  Unterminated_regular_expression_literal = 170,
  Binary_integer_literal_like_sequence_containing_an_invalid_digit = 175,
  Octal_integer_literal_like_sequence_containing_an_invalid_digit = 180,
  Binary_integer_literal_like_sequence_without_any_digits = 185,
  Octal_integer_literal_like_sequence_without_any_digits = 190,
  Hex_integer_literal_like_sequence_without_any_digits = 200,
  Non_number_after_exponent_indicator = 205,
  Invalid_BigInt_syntax = 210,
  Numeric_separators_not_allowed_here = 220,
  Multiple_consecutive_numeric_separators_are_not_permitted = 225,
  Numeric_separators_are_not_allowed_at_the_end_of_numeric_literals = 230,
  Numeric_separator_can_not_be_used_after_leading_0 = 240,
  Unknown_regular_expression_flag = 245,
  Duplicate_regular_expression_flag = 250,
  Unterminated_comment = 255,
  Invalid_astral_character = 260,
  Invalid_lower_surrogate = 265,
  Numeric_separator_is_not_allowed_at_the_first_of_digits = 270,
  Expression_or_comma_expected = 280,
  Declaration_or_statement_expected = 290,
  Statement_expected = 300,
  case_or_default_expected = 310,
  Property_or_signature_expected = 320,
  An_enum_member_name_must_be_followed_by_a_or = 330,
  Type_reference_expected = 340,
  Variable_declaration_expected = 350,
  Lexical_declaration_expected = 360,
  Argument_expression_expected = 370,
  Property_assignment_expected = 380,
  Parameter_declaration_expected = 385,
  Type_parameter_declaration_expected = 390,
  Type_argument_expected = 400,
  Type_expected = 410,
  _0_expected = 420,
  Trailing_comma_not_allowed = 430,
  Type_parameter_list_cannot_be_empty = 440,
  A_tuple_parameter_list_cannot_be_empty = 450,
  Type_argument_list_cannot_be_empty = 460,
  Expression_expected = 470,
  Variable_declaration_list_cannot_be_empty = 480,
  Lexical_declaration_list_cannot_be_empty = 490,
  Only_one_underscore_is_allowed_as_numeric_separator = 500,
  Unterminated_regular_expression = 510,
  Dot_property_must_be_an_identifier = 520,
  Invalid_optional_chain_in_tagged_template = 525,
  JSX_fragment_has_no_corresponding_closing_tag = 530,
  JSX_element_0_has_no_corresponding_closing_tag = 535,
  Expected_corresponding_closing_tag_for_JSX_fragment = 540,
  Expected_corresponding_JSX_closing_tag_for_0 = 545,
  Super_must_be_followed_by_an_argument_list_or_member_access = 550,
  Only_ECMAScript_imports_may_use_import_type = 560,
  Private_identifiers_are_not_allowed_outside_class_bodies = 600,
  Identifier_expected = 610,
  Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here = 620,
  An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression = 630,
  Super_may_not_use_type_arguments = 635,
  _abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration = 640,
  Interface_declaration_cannot_have_implements_clause = 645,
  A_get_accessor_cannot_have_parameters = 650,
  A_set_accessor_must_have_exactly_one_parameter = 700,
  A_private_public_or_protected_modifier_cannot_appear_here = 710,
  Private_identifiers_are_not_allowed_in_variable_declarations = 715,
  Private_identifiers_are_not_allowed_in_lexical_bindings = 720,
  Private_identifiers_cannot_be_used_as_parameters = 725,
  An_element_access_expression_should_take_an_argument = 730,
  The_export_keyword_can_only_be_used_with_the_module_goal = 735,
  The_import_keyword_can_only_be_used_with_the_module_goal = 740,
  In_non_strict_mode_code_functions_can_only_be_declared_at_top_level_inside_a_block_or_as_the_body_of_an_if_statement = 745,
  In_strict_mode_code_functions_can_only_be_declared_at_top_level_or_inside_a_block = 750,
  Class_declaration_cannot_appear_in_single_statement_context = 755,
  Without_web_compability_enabled_functions_can_not_be_declared_at_top_level_inside_a_block_or_as_the_body_of_an_if_statement = 760,
  Catch_clause_variable_cannot_have_an_initializer = 765,
  Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_the_whole_assignment_in_parentheses = 770,
  Expression_exprected_A_compound_assignment_cannot_follow_an_array_literal = 775,
  Expression_exprected_A_compound_assignment_cannot_follow_an_object_literal = 780,
  Access_modifiers_cannot_be_used_here = 785,
  An_optional_chain_cannot_contain_private_identifiers = 790,
  _can_only_be_used_at_the_start_of_a_file = 795,
  Initializers_are_not_allowed_in_ambient_contexts = 800,
  Classes_may_not_have_a_field_named_constructor = 805,
  Type_parameters_cannot_appear_on_a_constructor_declaration = 810
}

export const diagnosticMap: { [key: number]: string } = {
  [100]: 'Unexpected token.',
  [115]: 'Invalid character',
  [120]: 'Digit_expected',
  [125]: 'An identifier or keyword cannot immediately follow a numeric literal',
  [130]: 'Unterminated string literal',
  [135]: 'Unterminated template literal',
  [140]: 'Unexpected end of text',
  [145]: 'Hexadecimal digit expected',
  [150]: 'An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive',
  [155]: 'Unterminated Unicode escape sequence',
  [160]: 'Binary digit expected',
  [165]: 'Octal digit expected',
  [170]: 'Unterminated regular expression literal',
  [175]: 'Binary integer literal like sequence containing an invalid digit',
  [180]: 'Octal integer literal like sequence containing an invalid digit',
  [185]: 'Binary integer literal like sequence without any digits',
  [190]: 'Octal integer literal like sequence without any digits',
  [200]: 'Hex integer literal like sequence without any digits',
  [205]: 'Non-number after exponent indicator',
  [210]: 'Invalid BigInt syntax',
  [220]: 'Numeric separators not allowed here',
  [225]: 'Multiple consecutive numeric separators are not permitted',
  [230]: 'Numeric separators are not allowed at the end of numeric literals',
  [240]: 'Numeric separator can not be used after leading 0',
  [245]: 'Unknown regular expression flag',
  [250]: 'Duplicate regular expression flag',
  [255]: 'Unterminated comment',
  [260]: 'Invalid astral character',
  [265]: 'Invalid lower surrogate',
  [270]: 'Numeric separator is not allowed at the first of digits',
  [280]: 'Expression or comma expected.',
  [290]: 'Declaration or statement expected',
  [300]: 'Statement expected',
  [310]: 'case or default expected',
  [320]: 'Property or signature expected',
  [330]: "An enum member name must be followed by a ',', '=', or '}'.",
  [340]: 'Type reference expected',
  [350]: 'Variable declaration expected',
  [360]: 'Lexical declaration expected',
  [370]: 'Argument expression expected',
  [380]: 'Property assignment expected',
  [385]: 'Parameter declaration expected',
  [390]: 'Type parameter declaration expected',
  [400]: 'Type argument expected',
  [410]: 'Type expected',
  [420]: "'{0}' expected.",
  [430]: 'Trailing comma not allowed',
  [440]: 'Type parameter list cannot be empty',
  [450]: 'A tuple parameter list cannot be empty',
  [460]: 'Type argument list cannot be empty',
  [470]: 'Expression expected',
  [480]: 'Variable declaration list cannot be empty',
  [490]: 'Lexical declaration list cannot be empty',
  [500]: 'Only one underscore is allowed as numeric separator',
  [510]: 'Unterminated regular expression',
  [520]: 'Dot property must be an identifier',
  [525]: 'Invalid optional chain in tagged template',
  [530]: 'JSX fragment has no corresponding closing tag',
  [535]: "JSX element '{0}' has no corresponding closing tag",
  [540]: 'Expected corresponding closing tag for JSX fragment',
  [545]: "Expected corresponding JSX closing tag for '{0}'",
  [550]: 'Super must be followed by an argument list or member access',
  [560]: "Only ECMAScript imports may use 'import type",
  [600]: 'Private identifiers are not allowed outside class bodies',
  [610]: 'Identifier expected',
  [620]: "Identifier expected '{0}' is a reserved word that cannot be used here",
  [630]: "An unary expression with the '{0}' operator is not allowed in the left hand side of an exponentiation expression",
  [635]: 'Super may not use type arguments',
  [640]: "'abstract' modifier can only appear on a class, method or property declaration",
  [645]: 'Interface declaration cannot have implements clause',
  [650]: "A 'get' accessor cannot have parameters",
  [700]: "A 'set' accessor must have exactly one parameter",
  [710]: "A 'private', 'public' or 'protected' modifier cannot appear here",
  [715]: 'Private identifiers are not allowed in variable declarations',
  [720]: 'Private identifiers are not allowed in lexical bindings',
  [725]: 'Private identifiers cannot be used as parameters',
  [730]: 'An element access expression should take an argument',
  [735]: 'The `export` keyword can only be used with the module goal',
  [740]: 'The `import` keyword can only be used with the module goal',
  [745]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
  [750]: 'In strict mode code, functions can only be declared at top level or inside a block',
  [755]: 'Class declaration cannot appear in single-statement context',
  [760]: 'Without web compability enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
  [765]: 'Catch clause variable cannot have an initializer',
  [770]: "Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the the whole assignment in parentheses.",
  [775]: 'Expression exprected. A compound assignment cannot follow an array literal.',
  [780]: 'Expression exprected. A compound assignment cannot follow an object literal.',
  [785]: 'Access modifiers cannot be used here.',
  [790]: 'An optional chain cannot contain private identifiers',
  [795]: "'#' can only be used at the start of a file",
  [800]: 'Initializers are not allowed in ambient contexts',
  [805]: "Classes may not have a field named 'constructor'",
  [810]: 'Type parameters cannot appear on a constructor declaration'
};