# Kataw parser test case

## Input

`````js
class Foo {
	#x
	unary() {
		this.#x++
		this.#x--
		++this.#x
		--this.#x
	}
	binary() {
		this.#x = 1
		this.#x += 1
		this.#x -= 1
		this.#x *= 1
		this.#x /= 1
		this.#x %= 1
		this.#x **= 1
		this.#x <<= 1
		this.#x >>= 1
		this.#x >>>= 1
		this.#x &= 1
		this.#x |= 1
		this.#x ^= 1
		this.#x &&= 1
		this.#x ||= 1
		this.#x ??= 1
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 97,
                                "start": 11,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 11,
                            "end": 15
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
                                    "start": 15,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 24
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
                                                        "start": 36,
                                                        "end": 38
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 26,
                                                            "end": 33
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 34,
                                                            "end": 36
                                                        },
                                                        "flags": 97,
                                                        "start": 26,
                                                        "end": 36
                                                    },
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 38
                                                },
                                                "flags": 16,
                                                "start": 26,
                                                "end": 38
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 127,
                                                    "operandToken": {
                                                        "kind": 196636,
                                                        "flags": 96,
                                                        "start": 48,
                                                        "end": 50
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 38,
                                                            "end": 45
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "flags": 97,
                                                        "start": 38,
                                                        "end": 48
                                                    },
                                                    "flags": 32,
                                                    "start": 38,
                                                    "end": 50
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 50
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 128,
                                                    "operandToken": {
                                                        "kind": 196635,
                                                        "flags": 97,
                                                        "start": 50,
                                                        "end": 55
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "start": 55,
                                                            "end": 59
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "flags": 96,
                                                        "start": 55,
                                                        "end": 62
                                                    },
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 62
                                                },
                                                "flags": 16,
                                                "start": 50,
                                                "end": 62
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 128,
                                                    "operandToken": {
                                                        "kind": 196636,
                                                        "flags": 97,
                                                        "start": 62,
                                                        "end": 67
                                                    },
                                                    "operand": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "start": 67,
                                                            "end": 71
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 72,
                                                            "end": 74
                                                        },
                                                        "flags": 96,
                                                        "start": 67,
                                                        "end": 74
                                                    },
                                                    "flags": 32,
                                                    "start": 62,
                                                    "end": 74
                                                },
                                                "flags": 16,
                                                "start": 62,
                                                "end": 74
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 26,
                                        "end": 74
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 77
                                },
                                "flags": 0,
                                "start": 22,
                                "end": 77
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 77
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
                                    "start": 77,
                                    "end": 85
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 86,
                                    "end": 87
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
                                                            "flags": 97,
                                                            "start": 89,
                                                            "end": 96
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 97,
                                                            "end": 99
                                                        },
                                                        "flags": 97,
                                                        "start": 89,
                                                        "end": 99
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 99,
                                                        "end": 101
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 101,
                                                        "end": 103
                                                    },
                                                    "flags": 32,
                                                    "start": 89,
                                                    "end": 103
                                                },
                                                "flags": 16,
                                                "start": 89,
                                                "end": 103
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 103,
                                                            "end": 110
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 111,
                                                            "end": 113
                                                        },
                                                        "flags": 97,
                                                        "start": 103,
                                                        "end": 113
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "start": 113,
                                                        "end": 116
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 116,
                                                        "end": 118
                                                    },
                                                    "flags": 32,
                                                    "start": 103,
                                                    "end": 118
                                                },
                                                "flags": 16,
                                                "start": 103,
                                                "end": 118
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 118,
                                                            "end": 125
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 126,
                                                            "end": 128
                                                        },
                                                        "flags": 97,
                                                        "start": 118,
                                                        "end": 128
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4131,
                                                        "flags": 96,
                                                        "start": 128,
                                                        "end": 131
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 131,
                                                        "end": 133
                                                    },
                                                    "flags": 32,
                                                    "start": 118,
                                                    "end": 133
                                                },
                                                "flags": 16,
                                                "start": 118,
                                                "end": 133
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 133,
                                                            "end": 140
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 141,
                                                            "end": 143
                                                        },
                                                        "flags": 97,
                                                        "start": 133,
                                                        "end": 143
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4132,
                                                        "flags": 96,
                                                        "start": 143,
                                                        "end": 146
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 146,
                                                        "end": 148
                                                    },
                                                    "flags": 32,
                                                    "start": 133,
                                                    "end": 148
                                                },
                                                "flags": 16,
                                                "start": 133,
                                                "end": 148
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 148,
                                                            "end": 155
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 156,
                                                            "end": 158
                                                        },
                                                        "flags": 97,
                                                        "start": 148,
                                                        "end": 158
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4133,
                                                        "flags": 96,
                                                        "start": 158,
                                                        "end": 161
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 161,
                                                        "end": 163
                                                    },
                                                    "flags": 32,
                                                    "start": 148,
                                                    "end": 163
                                                },
                                                "flags": 16,
                                                "start": 148,
                                                "end": 163
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 163,
                                                            "end": 170
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 171,
                                                            "end": 173
                                                        },
                                                        "flags": 97,
                                                        "start": 163,
                                                        "end": 173
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4134,
                                                        "flags": 96,
                                                        "start": 173,
                                                        "end": 176
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 176,
                                                        "end": 178
                                                    },
                                                    "flags": 32,
                                                    "start": 163,
                                                    "end": 178
                                                },
                                                "flags": 16,
                                                "start": 163,
                                                "end": 178
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 178,
                                                            "end": 185
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 186,
                                                            "end": 188
                                                        },
                                                        "flags": 97,
                                                        "start": 178,
                                                        "end": 188
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4129,
                                                        "flags": 96,
                                                        "start": 188,
                                                        "end": 192
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 192,
                                                        "end": 194
                                                    },
                                                    "flags": 32,
                                                    "start": 178,
                                                    "end": 194
                                                },
                                                "flags": 16,
                                                "start": 178,
                                                "end": 194
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 194,
                                                            "end": 201
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 202,
                                                            "end": 204
                                                        },
                                                        "flags": 97,
                                                        "start": 194,
                                                        "end": 204
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4126,
                                                        "flags": 96,
                                                        "start": 204,
                                                        "end": 208
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 208,
                                                        "end": 210
                                                    },
                                                    "flags": 32,
                                                    "start": 194,
                                                    "end": 210
                                                },
                                                "flags": 16,
                                                "start": 194,
                                                "end": 210
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 210,
                                                            "end": 217
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 218,
                                                            "end": 220
                                                        },
                                                        "flags": 97,
                                                        "start": 210,
                                                        "end": 220
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4127,
                                                        "flags": 96,
                                                        "start": 220,
                                                        "end": 224
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 224,
                                                        "end": 226
                                                    },
                                                    "flags": 32,
                                                    "start": 210,
                                                    "end": 226
                                                },
                                                "flags": 16,
                                                "start": 210,
                                                "end": 226
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 226,
                                                            "end": 233
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 234,
                                                            "end": 236
                                                        },
                                                        "flags": 97,
                                                        "start": 226,
                                                        "end": 236
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4128,
                                                        "flags": 96,
                                                        "start": 236,
                                                        "end": 241
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 241,
                                                        "end": 243
                                                    },
                                                    "flags": 32,
                                                    "start": 226,
                                                    "end": 243
                                                },
                                                "flags": 16,
                                                "start": 226,
                                                "end": 243
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 243,
                                                            "end": 250
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 251,
                                                            "end": 253
                                                        },
                                                        "flags": 97,
                                                        "start": 243,
                                                        "end": 253
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4137,
                                                        "flags": 96,
                                                        "start": 253,
                                                        "end": 256
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 256,
                                                        "end": 258
                                                    },
                                                    "flags": 32,
                                                    "start": 243,
                                                    "end": 258
                                                },
                                                "flags": 16,
                                                "start": 243,
                                                "end": 258
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 258,
                                                            "end": 265
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 266,
                                                            "end": 268
                                                        },
                                                        "flags": 97,
                                                        "start": 258,
                                                        "end": 268
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4136,
                                                        "flags": 96,
                                                        "start": 268,
                                                        "end": 271
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 271,
                                                        "end": 273
                                                    },
                                                    "flags": 32,
                                                    "start": 258,
                                                    "end": 273
                                                },
                                                "flags": 16,
                                                "start": 258,
                                                "end": 273
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 273,
                                                            "end": 280
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 281,
                                                            "end": 283
                                                        },
                                                        "flags": 97,
                                                        "start": 273,
                                                        "end": 283
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4135,
                                                        "flags": 96,
                                                        "start": 283,
                                                        "end": 286
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 286,
                                                        "end": 288
                                                    },
                                                    "flags": 32,
                                                    "start": 273,
                                                    "end": 288
                                                },
                                                "flags": 16,
                                                "start": 273,
                                                "end": 288
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 288,
                                                            "end": 295
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 296,
                                                            "end": 298
                                                        },
                                                        "flags": 97,
                                                        "start": 288,
                                                        "end": 298
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4139,
                                                        "flags": 96,
                                                        "start": 298,
                                                        "end": 302
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 302,
                                                        "end": 304
                                                    },
                                                    "flags": 32,
                                                    "start": 288,
                                                    "end": 304
                                                },
                                                "flags": 16,
                                                "start": 288,
                                                "end": 304
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 304,
                                                            "end": 311
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 312,
                                                            "end": 314
                                                        },
                                                        "flags": 97,
                                                        "start": 304,
                                                        "end": 314
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4138,
                                                        "flags": 96,
                                                        "start": 314,
                                                        "end": 318
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 318,
                                                        "end": 320
                                                    },
                                                    "flags": 32,
                                                    "start": 304,
                                                    "end": 320
                                                },
                                                "flags": 16,
                                                "start": 304,
                                                "end": 320
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 320,
                                                            "end": 327
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 328,
                                                            "end": 330
                                                        },
                                                        "flags": 97,
                                                        "start": 320,
                                                        "end": 330
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4140,
                                                        "flags": 96,
                                                        "start": 330,
                                                        "end": 334
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 334,
                                                        "end": 336
                                                    },
                                                    "flags": 32,
                                                    "start": 320,
                                                    "end": 336
                                                },
                                                "flags": 16,
                                                "start": 320,
                                                "end": 336
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 89,
                                        "end": 336
                                    },
                                    "flags": 32,
                                    "start": 87,
                                    "end": 339
                                },
                                "flags": 0,
                                "start": 85,
                                "end": 339
                            },
                            "flags": 0,
                            "start": 77,
                            "end": 339
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 339
                },
                "flags": 9,
                "start": 32,
                "end": 341
            },
            "flags": 16,
            "start": 0,
            "end": 341
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\t#x\n\tunary() {\n\t\tthis.#x++\n\t\tthis.#x--\n\t\t++this.#x\n\t\t--this.#x\n\t}\n\tbinary() {\n\t\tthis.#x = 1\n\t\tthis.#x += 1\n\t\tthis.#x -= 1\n\t\tthis.#x *= 1\n\t\tthis.#x /= 1\n\t\tthis.#x %= 1\n\t\tthis.#x **= 1\n\t\tthis.#x <<= 1\n\t\tthis.#x >>= 1\n\t\tthis.#x >>>= 1\n\t\tthis.#x &= 1\n\t\tthis.#x |= 1\n\t\tthis.#x ^= 1\n\t\tthis.#x &&= 1\n\t\tthis.#x ||= 1\n\t\tthis.#x ??= 1\n\t}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 341
}
```

### Printed

```javascript

class Foo {
  #x
  unary() {
    this.#x++;
    this.#x--;
    ++this.#x;
    --this.#x;
  }
  binary() {
    this.#x = 1;
    this.#x += 1;
    this.#x -= 1;
    this.#x *= 1;
    this.#x /= 1;
    this.#x %= 1;
    this.#x **= 1;
    this.#x <<= 1;
    this.#x >>= 1;
    this.#x >>>= 1;
    this.#x &= 1;
    this.#x |= 1;
    this.#x ^= 1;
    this.#x &&= 1;
    this.#x ||= 1;
    this.#x ??= 1;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

