# Kataw parser test case

## Input

`````js
class Foo {
	get #foo() { return this.foo }
	set #bar(val) { this.bar = val }
	get #prop() { return this.prop }
	set #prop(val) { this.prop = val }
	foo(fn) {
		fn().#foo
		fn().#bar = 1
		fn().#prop
		fn().#prop = 2
	}
	unary(fn) {
		fn().#prop++;
		fn().#prop--;
		++fn().#prop;
		--fn().#prop;
	}
	binary(fn) {
		fn().#prop = 1;
		fn().#prop += 1;
		fn().#prop -= 1;
		fn().#prop *= 1;
		fn().#prop /= 1;
		fn().#prop %= 1;
		fn().#prop **= 1;
		fn().#prop <<= 1;
		fn().#prop >>= 1;
		fn().#prop >>>= 1;
		fn().#prop &= 1;
		fn().#prop |= 1;
		fn().#prop ^= 1;
		fn().#prop &&= 1;
		fn().#prop ||= 1;
		fn().#prop ??= 1;
	}
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 16
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#foo",
                                    "rawText": "#foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 32
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 37
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 41
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 32,
                                                    "end": 41
                                                },
                                                "flags": 80,
                                                "transformFlags": 256,
                                                "start": 25,
                                                "end": 41
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 43
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 43
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 43
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 48
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#bar",
                                    "rawText": "#bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 53
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "val",
                                            "rawText": "val",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 57
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 58
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 60,
                                                            "end": 65
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 66,
                                                            "end": 69
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 60,
                                                        "end": 69
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 69,
                                                        "end": 71
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "val",
                                                        "rawText": "val",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 71,
                                                        "end": 75
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 60,
                                                    "end": 75
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 60,
                                                "end": 75
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 77
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 77
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 77
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 82
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#prop",
                                    "rawText": "#prop",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 88
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 90
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 92,
                                                    "end": 99
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 99,
                                                        "end": 104
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "prop",
                                                        "rawText": "prop",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 105,
                                                        "end": 109
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 99,
                                                    "end": 109
                                                },
                                                "flags": 80,
                                                "transformFlags": 256,
                                                "start": 92,
                                                "end": 109
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 92,
                                        "end": 109
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 111
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 88,
                                "end": 111
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 111
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 116
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#prop",
                                    "rawText": "#prop",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 122
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "val",
                                            "rawText": "val",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 123,
                                            "end": 126
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 127
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 129,
                                                            "end": 134
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "prop",
                                                            "rawText": "prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 135,
                                                            "end": 139
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 129,
                                                        "end": 139
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 139,
                                                        "end": 141
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "val",
                                                        "rawText": "val",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 141,
                                                        "end": 145
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 129,
                                                    "end": 145
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 129,
                                                "end": 145
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 129,
                                        "end": 145
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 127,
                                    "end": 147
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 147
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 111,
                            "end": 147
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 147,
                                    "end": 152
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "fn",
                                            "rawText": "fn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 153,
                                            "end": 155
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 153,
                                    "end": 156
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "fn",
                                                            "rawText": "fn",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 158,
                                                            "end": 163
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 164,
                                                            "end": 164
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 158,
                                                        "end": 165
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#foo",
                                                        "rawText": "#foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 166,
                                                        "end": 170
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 2,
                                                    "start": 158,
                                                    "end": 170
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 158,
                                                "end": 170
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 170,
                                                                "end": 175
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 176,
                                                                "end": 176
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 170,
                                                            "end": 177
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#bar",
                                                            "rawText": "#bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 178,
                                                            "end": 182
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 170,
                                                        "end": 182
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 182,
                                                        "end": 184
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 184,
                                                        "end": 186
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 170,
                                                    "end": 186
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 170,
                                                "end": 186
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "fn",
                                                            "rawText": "fn",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 186,
                                                            "end": 191
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 192,
                                                            "end": 192
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 186,
                                                        "end": 193
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#prop",
                                                        "rawText": "#prop",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 194,
                                                        "end": 199
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 2,
                                                    "start": 186,
                                                    "end": 199
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 186,
                                                "end": 199
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 199,
                                                                "end": 204
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 205,
                                                                "end": 205
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 199,
                                                            "end": 206
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 207,
                                                            "end": 212
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 199,
                                                        "end": 212
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 212,
                                                        "end": 214
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 214,
                                                        "end": 216
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 199,
                                                    "end": 216
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 199,
                                                "end": 216
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 158,
                                        "end": 216
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 156,
                                    "end": 219
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 152,
                                "end": 219
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 147,
                            "end": 219
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "unary",
                                    "rawText": "unary",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 219,
                                    "end": 226
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "fn",
                                            "rawText": "fn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 227,
                                            "end": 229
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 227,
                                    "end": 230
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 127,
                                                    "operandToken": {
                                                        "kind": 196635,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 245,
                                                        "end": 247
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 232,
                                                                "end": 237
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 238,
                                                                "end": 238
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 232,
                                                            "end": 239
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 240,
                                                            "end": 245
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 232,
                                                        "end": 245
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 232,
                                                    "end": 247
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 232,
                                                "end": 248
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 127,
                                                    "operandToken": {
                                                        "kind": 196636,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 261,
                                                        "end": 263
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 248,
                                                                "end": 253
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 254,
                                                                "end": 254
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 248,
                                                            "end": 255
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 256,
                                                            "end": 261
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 248,
                                                        "end": 261
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 248,
                                                    "end": 263
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 248,
                                                "end": 264
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 128,
                                                    "operandToken": {
                                                        "kind": 196635,
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 264,
                                                        "end": 269
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 269,
                                                                "end": 271
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 272,
                                                                "end": 272
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 269,
                                                            "end": 273
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 274,
                                                            "end": 279
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 269,
                                                        "end": 279
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 264,
                                                    "end": 279
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 264,
                                                "end": 280
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 128,
                                                    "operandToken": {
                                                        "kind": 196636,
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 280,
                                                        "end": 285
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 285,
                                                                "end": 287
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 288,
                                                                "end": 288
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 285,
                                                            "end": 289
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 290,
                                                            "end": 295
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 285,
                                                        "end": 295
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 280,
                                                    "end": 295
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 280,
                                                "end": 296
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 232,
                                        "end": 296
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 230,
                                    "end": 299
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 299
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 219,
                            "end": 299
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "binary",
                                    "rawText": "binary",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 299,
                                    "end": 307
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "fn",
                                            "rawText": "fn",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 308,
                                            "end": 310
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 308,
                                    "end": 311
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 313,
                                                                "end": 318
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 319,
                                                                "end": 319
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 313,
                                                            "end": 320
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 321,
                                                            "end": 326
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 313,
                                                        "end": 326
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 326,
                                                        "end": 328
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 328,
                                                        "end": 330
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 313,
                                                    "end": 330
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 313,
                                                "end": 331
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 331,
                                                                "end": 336
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 337,
                                                                "end": 337
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 331,
                                                            "end": 338
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 339,
                                                            "end": 344
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 331,
                                                        "end": 344
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 344,
                                                        "end": 347
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 347,
                                                        "end": 349
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 331,
                                                    "end": 349
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 331,
                                                "end": 350
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 350,
                                                                "end": 355
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 356,
                                                                "end": 356
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 350,
                                                            "end": 357
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 358,
                                                            "end": 363
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 350,
                                                        "end": 363
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4131,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 363,
                                                        "end": 366
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 366,
                                                        "end": 368
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 350,
                                                    "end": 368
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 350,
                                                "end": 369
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 369,
                                                                "end": 374
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 375,
                                                                "end": 375
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 369,
                                                            "end": 376
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 377,
                                                            "end": 382
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 369,
                                                        "end": 382
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4132,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 382,
                                                        "end": 385
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 385,
                                                        "end": 387
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 369,
                                                    "end": 387
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 369,
                                                "end": 388
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 388,
                                                                "end": 393
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 394,
                                                                "end": 394
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 388,
                                                            "end": 395
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 396,
                                                            "end": 401
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 388,
                                                        "end": 401
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4133,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 401,
                                                        "end": 404
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 404,
                                                        "end": 406
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 388,
                                                    "end": 406
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 388,
                                                "end": 407
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 407,
                                                                "end": 412
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 413,
                                                                "end": 413
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 407,
                                                            "end": 414
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 415,
                                                            "end": 420
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 407,
                                                        "end": 420
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4134,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 420,
                                                        "end": 423
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 423,
                                                        "end": 425
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 407,
                                                    "end": 425
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 407,
                                                "end": 426
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 426,
                                                                "end": 431
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 432,
                                                                "end": 432
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 426,
                                                            "end": 433
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 434,
                                                            "end": 439
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 426,
                                                        "end": 439
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4129,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 439,
                                                        "end": 443
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 443,
                                                        "end": 445
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 426,
                                                    "end": 445
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 426,
                                                "end": 446
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 446,
                                                                "end": 451
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 452,
                                                                "end": 452
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 446,
                                                            "end": 453
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 454,
                                                            "end": 459
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 446,
                                                        "end": 459
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4126,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 459,
                                                        "end": 463
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 463,
                                                        "end": 465
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 446,
                                                    "end": 465
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 446,
                                                "end": 466
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 466,
                                                                "end": 471
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 472,
                                                                "end": 472
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 466,
                                                            "end": 473
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 474,
                                                            "end": 479
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 466,
                                                        "end": 479
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4127,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 479,
                                                        "end": 483
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 483,
                                                        "end": 485
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 466,
                                                    "end": 485
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 466,
                                                "end": 486
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 486,
                                                                "end": 491
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 492,
                                                                "end": 492
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 486,
                                                            "end": 493
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 494,
                                                            "end": 499
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 486,
                                                        "end": 499
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4128,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 499,
                                                        "end": 504
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 504,
                                                        "end": 506
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 486,
                                                    "end": 506
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 486,
                                                "end": 507
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 507,
                                                                "end": 512
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 513,
                                                                "end": 513
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 507,
                                                            "end": 514
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 515,
                                                            "end": 520
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 507,
                                                        "end": 520
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4137,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 520,
                                                        "end": 523
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 523,
                                                        "end": 525
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 507,
                                                    "end": 525
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 507,
                                                "end": 526
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 526,
                                                                "end": 531
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 532,
                                                                "end": 532
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 526,
                                                            "end": 533
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 534,
                                                            "end": 539
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 526,
                                                        "end": 539
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4136,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 539,
                                                        "end": 542
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 542,
                                                        "end": 544
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 526,
                                                    "end": 544
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 526,
                                                "end": 545
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 545,
                                                                "end": 550
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 551,
                                                                "end": 551
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 545,
                                                            "end": 552
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 553,
                                                            "end": 558
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 545,
                                                        "end": 558
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4135,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 558,
                                                        "end": 561
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 561,
                                                        "end": 563
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 545,
                                                    "end": 563
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 545,
                                                "end": 564
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 564,
                                                                "end": 569
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 570,
                                                                "end": 570
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 564,
                                                            "end": 571
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 572,
                                                            "end": 577
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 564,
                                                        "end": 577
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4139,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 577,
                                                        "end": 581
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 581,
                                                        "end": 583
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 564,
                                                    "end": 583
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 564,
                                                "end": 584
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 584,
                                                                "end": 589
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 590,
                                                                "end": 590
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 584,
                                                            "end": 591
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 592,
                                                            "end": 597
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 584,
                                                        "end": 597
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4138,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 597,
                                                        "end": 601
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 601,
                                                        "end": 603
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 584,
                                                    "end": 603
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 584,
                                                "end": 604
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "fn",
                                                                "rawText": "fn",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 604,
                                                                "end": 609
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 610,
                                                                "end": 610
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 604,
                                                            "end": 611
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#prop",
                                                            "rawText": "#prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 612,
                                                            "end": 617
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 2,
                                                        "start": 604,
                                                        "end": 617
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4140,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 617,
                                                        "end": 621
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 621,
                                                        "end": 623
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 604,
                                                    "end": 623
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 604,
                                                "end": 624
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 313,
                                        "end": 624
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 311,
                                    "end": 627
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 307,
                                "end": 627
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 299,
                            "end": 627
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 627
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 629
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 629
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\tget #foo() { return this.foo }\n\tset #bar(val) { this.bar = val }\n\tget #prop() { return this.prop }\n\tset #prop(val) { this.prop = val }\n\tfoo(fn) {\n\t\tfn().#foo\n\t\tfn().#bar = 1\n\t\tfn().#prop\n\t\tfn().#prop = 2\n\t}\n\tunary(fn) {\n\t\tfn().#prop++;\n\t\tfn().#prop--;\n\t\t++fn().#prop;\n\t\t--fn().#prop;\n\t}\n\tbinary(fn) {\n\t\tfn().#prop = 1;\n\t\tfn().#prop += 1;\n\t\tfn().#prop -= 1;\n\t\tfn().#prop *= 1;\n\t\tfn().#prop /= 1;\n\t\tfn().#prop %= 1;\n\t\tfn().#prop **= 1;\n\t\tfn().#prop <<= 1;\n\t\tfn().#prop >>= 1;\n\t\tfn().#prop >>>= 1;\n\t\tfn().#prop &= 1;\n\t\tfn().#prop |= 1;\n\t\tfn().#prop ^= 1;\n\t\tfn().#prop &&= 1;\n\t\tfn().#prop ||= 1;\n\t\tfn().#prop ??= 1;\n\t}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 629
}
```

### Printed

```javascript

class Foo {
  get #foo() {
    return this .foo;
  }
  set #bar(val) {
    this .bar = val;
  }
  get #prop() {
    return this .prop;
  }
  set #prop(val) {
    this .prop = val;
  }
  foo(fn) {
    fn().#foo;
    fn().#bar = 1;
    fn().#prop;
    fn().#prop = 2;
  }
  unary(fn) {
    fn().#prop++ ;
    fn().#prop-- ;
    ++ fn().#prop;
    -- fn().#prop;
  }
  binary(fn) {
    fn().#prop = 1;
    fn().#prop += 1;
    fn().#prop -= 1;
    fn().#prop *= 1;
    fn().#prop /= 1;
    fn().#prop %= 1;
    fn().#prop **= 1;
    fn().#prop <<= 1;
    fn().#prop >>= 1;
    fn().#prop >>>= 1;
    fn().#prop &= 1;
    fn().#prop |= 1;
    fn().#prop ^= 1;
    fn().#prop &&= 1;
    fn().#prop ||= 1;
    fn().#prop ??= 1;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

