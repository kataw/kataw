# Kataw parser test case

## Input

`````js
class Foo {
	#field
	#method() {}
	baseline() {
		a().foo
		b().foo(x)
		c()?.foo(x)
		d().foo?.(x)
		e()?.foo?.(x)
	}
	privateField() {
		a().#field
		b().#field(x)
		c()?.#field(x)
		d().#field?.(x)
		e()?.#field?.(x)
		f()?.foo.#field(x).bar()
	}
	privateMethod() {
		a().#method
		b().#method(x)
		c()?.#method(x)
		d().#method?.(x)
		e()?.#method?.(x)
		f()?.foo.#method(x).bar()
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
                "flags": 0,
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
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67174651,
                            "text": "#field",
                            "flags": 96,
                            "start": 11,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 11,
                        "end": 19
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174651,
                                "text": "#method",
                                "flags": 96,
                                "start": 19,
                                "end": 28
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 29,
                                "end": 30
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 28,
                            "end": 33
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 33
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "baseline",
                                "rawText": "baseline",
                                "flags": 96,
                                "start": 33,
                                "end": 43
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 44,
                                "end": 45
                            },
                            "type": null,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 47,
                                                        "end": 51
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 52,
                                                        "end": 52
                                                    },
                                                    "flags": 32,
                                                    "start": 47,
                                                    "end": 53
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 54,
                                                    "end": 57
                                                },
                                                "flags": 32,
                                                "start": 47,
                                                "end": 57
                                            },
                                            "flags": 16,
                                            "start": 47,
                                            "end": 57
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 57,
                                                            "end": 61
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 62,
                                                            "end": 62
                                                        },
                                                        "flags": 32,
                                                        "start": 57,
                                                        "end": 63
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 64,
                                                        "end": 67
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 67
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 68,
                                                            "end": 69
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 68,
                                                    "end": 69
                                                },
                                                "flags": 32,
                                                "start": 57,
                                                "end": 70
                                            },
                                            "flags": 16,
                                            "start": 57,
                                            "end": 70
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 0,
                                                    "start": 76,
                                                    "end": 78
                                                },
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 70,
                                                        "end": 74
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 75,
                                                        "end": 75
                                                    },
                                                    "flags": 32,
                                                    "start": 70,
                                                    "end": 76
                                                },
                                                "chain": {
                                                    "kind": 204,
                                                    "chain": {
                                                        "kind": 206,
                                                        "chain": {
                                                            "kind": 202,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 78,
                                                                "end": 81
                                                            },
                                                            "flags": 32,
                                                            "start": 78,
                                                            "end": 81
                                                        },
                                                        "flags": 32,
                                                        "start": 78,
                                                        "end": 81
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 82,
                                                                "end": 83
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 82,
                                                        "end": 83
                                                    },
                                                    "flags": 32,
                                                    "start": 81,
                                                    "end": 84
                                                },
                                                "flags": 32,
                                                "start": 70,
                                                "end": 84
                                            },
                                            "flags": 16,
                                            "start": 70,
                                            "end": 84
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 0,
                                                    "start": 110,
                                                    "end": 112
                                                },
                                                "member": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 0,
                                                        "start": 105,
                                                        "end": 107
                                                    },
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 205,
                                                            "chainToken": {
                                                                "kind": 393240,
                                                                "flags": 0,
                                                                "start": 94,
                                                                "end": 96
                                                            },
                                                            "member": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "d",
                                                                        "rawText": "d",
                                                                        "flags": 96,
                                                                        "start": 84,
                                                                        "end": 88
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 89,
                                                                        "end": 89
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 84,
                                                                    "end": 90
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 91,
                                                                    "end": 94
                                                                },
                                                                "flags": 32,
                                                                "start": 84,
                                                                "end": 94
                                                            },
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": {
                                                                    "kind": 206,
                                                                    "chain": {
                                                                        "kind": 204,
                                                                        "chain": null,
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "start": 97,
                                                                                    "end": 98
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 97,
                                                                            "end": 98
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 96,
                                                                        "end": 99
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 96,
                                                                    "end": 99
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "e",
                                                                    "rawText": "e",
                                                                    "flags": 96,
                                                                    "start": 99,
                                                                    "end": 103
                                                                },
                                                                "flags": 32,
                                                                "start": 99,
                                                                "end": 103
                                                            },
                                                            "flags": 32,
                                                            "start": 84,
                                                            "end": 103
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 104,
                                                            "end": 104
                                                        },
                                                        "flags": 32,
                                                        "start": 84,
                                                        "end": 105
                                                    },
                                                    "chain": {
                                                        "kind": 206,
                                                        "chain": {
                                                            "kind": 202,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 107,
                                                                "end": 110
                                                            },
                                                            "flags": 32,
                                                            "start": 107,
                                                            "end": 110
                                                        },
                                                        "flags": 32,
                                                        "start": 107,
                                                        "end": 110
                                                    },
                                                    "flags": 32,
                                                    "start": 84,
                                                    "end": 110
                                                },
                                                "chain": {
                                                    "kind": 206,
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 113,
                                                                    "end": 114
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 113,
                                                            "end": 114
                                                        },
                                                        "flags": 32,
                                                        "start": 112,
                                                        "end": 115
                                                    },
                                                    "flags": 32,
                                                    "start": 112,
                                                    "end": 115
                                                },
                                                "flags": 32,
                                                "start": 84,
                                                "end": 115
                                            },
                                            "flags": 16,
                                            "start": 84,
                                            "end": 115
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 47,
                                    "end": 115
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 118
                            },
                            "flags": 0,
                            "start": 43,
                            "end": 118
                        },
                        "flags": 0,
                        "start": 33,
                        "end": 118
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "privateField",
                                "rawText": "privateField",
                                "flags": 96,
                                "start": 118,
                                "end": 132
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 133,
                                "end": 134
                            },
                            "type": null,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 136,
                                                        "end": 140
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 141,
                                                        "end": 141
                                                    },
                                                    "flags": 32,
                                                    "start": 136,
                                                    "end": 142
                                                },
                                                "expression": {
                                                    "kind": 67174651,
                                                    "text": "#field",
                                                    "flags": 96,
                                                    "start": 143,
                                                    "end": 149
                                                },
                                                "flags": 32,
                                                "start": 136,
                                                "end": 149
                                            },
                                            "flags": 16,
                                            "start": 136,
                                            "end": 149
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 149,
                                                            "end": 153
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 154,
                                                            "end": 154
                                                        },
                                                        "flags": 32,
                                                        "start": 149,
                                                        "end": 155
                                                    },
                                                    "expression": {
                                                        "kind": 67174651,
                                                        "text": "#field",
                                                        "flags": 96,
                                                        "start": 156,
                                                        "end": 162
                                                    },
                                                    "flags": 32,
                                                    "start": 149,
                                                    "end": 162
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 163,
                                                            "end": 164
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 163,
                                                    "end": 164
                                                },
                                                "flags": 32,
                                                "start": 149,
                                                "end": 165
                                            },
                                            "flags": 16,
                                            "start": 149,
                                            "end": 165
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 0,
                                                    "start": 171,
                                                    "end": 173
                                                },
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 165,
                                                        "end": 169
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 170,
                                                        "end": 170
                                                    },
                                                    "flags": 32,
                                                    "start": 165,
                                                    "end": 171
                                                },
                                                "chain": {
                                                    "kind": 204,
                                                    "chain": {
                                                        "kind": 206,
                                                        "chain": {
                                                            "kind": 202,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 67174651,
                                                                "text": "#field",
                                                                "flags": 96,
                                                                "start": 173,
                                                                "end": 179
                                                            },
                                                            "flags": 32,
                                                            "start": 173,
                                                            "end": 179
                                                        },
                                                        "flags": 32,
                                                        "start": 173,
                                                        "end": 179
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 180,
                                                                "end": 181
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 180,
                                                        "end": 181
                                                    },
                                                    "flags": 32,
                                                    "start": 179,
                                                    "end": 182
                                                },
                                                "flags": 32,
                                                "start": 165,
                                                "end": 182
                                            },
                                            "flags": 16,
                                            "start": 165,
                                            "end": 182
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 205,
                                                            "chainToken": {
                                                                "kind": 393240,
                                                                "flags": 0,
                                                                "start": 225,
                                                                "end": 227
                                                            },
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 205,
                                                                    "chainToken": {
                                                                        "kind": 393240,
                                                                        "flags": 0,
                                                                        "start": 214,
                                                                        "end": 216
                                                                    },
                                                                    "member": {
                                                                        "kind": 205,
                                                                        "chainToken": {
                                                                            "kind": 393240,
                                                                            "flags": 0,
                                                                            "start": 206,
                                                                            "end": 208
                                                                        },
                                                                        "member": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 205,
                                                                                "chainToken": {
                                                                                    "kind": 393240,
                                                                                    "flags": 0,
                                                                                    "start": 195,
                                                                                    "end": 197
                                                                                },
                                                                                "member": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "d",
                                                                                            "rawText": "d",
                                                                                            "flags": 96,
                                                                                            "start": 182,
                                                                                            "end": 186
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 187,
                                                                                            "end": 187
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 182,
                                                                                        "end": 188
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 67174651,
                                                                                        "text": "#field",
                                                                                        "flags": 96,
                                                                                        "start": 189,
                                                                                        "end": 195
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 182,
                                                                                    "end": 195
                                                                                },
                                                                                "chain": {
                                                                                    "kind": 202,
                                                                                    "chain": {
                                                                                        "kind": 206,
                                                                                        "chain": {
                                                                                            "kind": 204,
                                                                                            "chain": null,
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "x",
                                                                                                        "rawText": "x",
                                                                                                        "flags": 96,
                                                                                                        "start": 198,
                                                                                                        "end": 199
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 198,
                                                                                                "end": 199
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 197,
                                                                                            "end": 200
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 197,
                                                                                        "end": 200
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "e",
                                                                                        "rawText": "e",
                                                                                        "flags": 96,
                                                                                        "start": 200,
                                                                                        "end": 204
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 200,
                                                                                    "end": 204
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 182,
                                                                                "end": 204
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 205,
                                                                                "end": 205
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 182,
                                                                            "end": 206
                                                                        },
                                                                        "chain": {
                                                                            "kind": 206,
                                                                            "chain": {
                                                                                "kind": 202,
                                                                                "chain": null,
                                                                                "expression": {
                                                                                    "kind": 67174651,
                                                                                    "text": "#field",
                                                                                    "flags": 96,
                                                                                    "start": 208,
                                                                                    "end": 214
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 208,
                                                                                "end": 214
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 208,
                                                                            "end": 214
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 182,
                                                                        "end": 214
                                                                    },
                                                                    "chain": {
                                                                        "kind": 202,
                                                                        "chain": {
                                                                            "kind": 206,
                                                                            "chain": {
                                                                                "kind": 204,
                                                                                "chain": null,
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 134299649,
                                                                                            "text": "x",
                                                                                            "rawText": "x",
                                                                                            "flags": 96,
                                                                                            "start": 217,
                                                                                            "end": 218
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 217,
                                                                                    "end": 218
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 216,
                                                                                "end": 219
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 216,
                                                                            "end": 219
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 96,
                                                                            "start": 219,
                                                                            "end": 223
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 219,
                                                                        "end": 223
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 182,
                                                                    "end": 223
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 224,
                                                                    "end": 224
                                                                },
                                                                "flags": 32,
                                                                "start": 182,
                                                                "end": 225
                                                            },
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": {
                                                                    "kind": 206,
                                                                    "chain": {
                                                                        "kind": 202,
                                                                        "chain": null,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "start": 227,
                                                                            "end": 230
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 227,
                                                                        "end": 230
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 227,
                                                                    "end": 230
                                                                },
                                                                "expression": {
                                                                    "kind": 67174651,
                                                                    "text": "#field",
                                                                    "flags": 96,
                                                                    "start": 231,
                                                                    "end": 237
                                                                },
                                                                "flags": 32,
                                                                "start": 230,
                                                                "end": 237
                                                            },
                                                            "flags": 32,
                                                            "start": 182,
                                                            "end": 237
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 238,
                                                                    "end": 239
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 238,
                                                            "end": 239
                                                        },
                                                        "flags": 32,
                                                        "start": 182,
                                                        "end": 240
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "start": 241,
                                                        "end": 244
                                                    },
                                                    "flags": 32,
                                                    "start": 182,
                                                    "end": 244
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 245,
                                                    "end": 245
                                                },
                                                "flags": 32,
                                                "start": 182,
                                                "end": 246
                                            },
                                            "flags": 16,
                                            "start": 182,
                                            "end": 246
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 136,
                                    "end": 246
                                },
                                "flags": 32,
                                "start": 134,
                                "end": 249
                            },
                            "flags": 0,
                            "start": 132,
                            "end": 249
                        },
                        "flags": 0,
                        "start": 118,
                        "end": 249
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "privateMethod",
                                "rawText": "privateMethod",
                                "flags": 96,
                                "start": 249,
                                "end": 264
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 265,
                                "end": 266
                            },
                            "type": null,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 268,
                                                        "end": 272
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 273,
                                                        "end": 273
                                                    },
                                                    "flags": 32,
                                                    "start": 268,
                                                    "end": 274
                                                },
                                                "expression": {
                                                    "kind": 67174651,
                                                    "text": "#method",
                                                    "flags": 96,
                                                    "start": 275,
                                                    "end": 282
                                                },
                                                "flags": 32,
                                                "start": 268,
                                                "end": 282
                                            },
                                            "flags": 16,
                                            "start": 268,
                                            "end": 282
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 282,
                                                            "end": 286
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 287,
                                                            "end": 287
                                                        },
                                                        "flags": 32,
                                                        "start": 282,
                                                        "end": 288
                                                    },
                                                    "expression": {
                                                        "kind": 67174651,
                                                        "text": "#method",
                                                        "flags": 96,
                                                        "start": 289,
                                                        "end": 296
                                                    },
                                                    "flags": 32,
                                                    "start": 282,
                                                    "end": 296
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 297,
                                                            "end": 298
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 297,
                                                    "end": 298
                                                },
                                                "flags": 32,
                                                "start": 282,
                                                "end": 299
                                            },
                                            "flags": 16,
                                            "start": 282,
                                            "end": 299
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 0,
                                                    "start": 305,
                                                    "end": 307
                                                },
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 299,
                                                        "end": 303
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 304,
                                                        "end": 304
                                                    },
                                                    "flags": 32,
                                                    "start": 299,
                                                    "end": 305
                                                },
                                                "chain": {
                                                    "kind": 204,
                                                    "chain": {
                                                        "kind": 206,
                                                        "chain": {
                                                            "kind": 202,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 67174651,
                                                                "text": "#method",
                                                                "flags": 96,
                                                                "start": 307,
                                                                "end": 314
                                                            },
                                                            "flags": 32,
                                                            "start": 307,
                                                            "end": 314
                                                        },
                                                        "flags": 32,
                                                        "start": 307,
                                                        "end": 314
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 315,
                                                                "end": 316
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 315,
                                                        "end": 316
                                                    },
                                                    "flags": 32,
                                                    "start": 314,
                                                    "end": 317
                                                },
                                                "flags": 32,
                                                "start": 299,
                                                "end": 317
                                            },
                                            "flags": 16,
                                            "start": 299,
                                            "end": 317
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 205,
                                                            "chainToken": {
                                                                "kind": 393240,
                                                                "flags": 0,
                                                                "start": 362,
                                                                "end": 364
                                                            },
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 205,
                                                                    "chainToken": {
                                                                        "kind": 393240,
                                                                        "flags": 0,
                                                                        "start": 351,
                                                                        "end": 353
                                                                    },
                                                                    "member": {
                                                                        "kind": 205,
                                                                        "chainToken": {
                                                                            "kind": 393240,
                                                                            "flags": 0,
                                                                            "start": 342,
                                                                            "end": 344
                                                                        },
                                                                        "member": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 205,
                                                                                "chainToken": {
                                                                                    "kind": 393240,
                                                                                    "flags": 0,
                                                                                    "start": 331,
                                                                                    "end": 333
                                                                                },
                                                                                "member": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "d",
                                                                                            "rawText": "d",
                                                                                            "flags": 96,
                                                                                            "start": 317,
                                                                                            "end": 321
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 322,
                                                                                            "end": 322
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 317,
                                                                                        "end": 323
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 67174651,
                                                                                        "text": "#method",
                                                                                        "flags": 96,
                                                                                        "start": 324,
                                                                                        "end": 331
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 317,
                                                                                    "end": 331
                                                                                },
                                                                                "chain": {
                                                                                    "kind": 202,
                                                                                    "chain": {
                                                                                        "kind": 206,
                                                                                        "chain": {
                                                                                            "kind": 204,
                                                                                            "chain": null,
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "x",
                                                                                                        "rawText": "x",
                                                                                                        "flags": 96,
                                                                                                        "start": 334,
                                                                                                        "end": 335
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 334,
                                                                                                "end": 335
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 333,
                                                                                            "end": 336
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 333,
                                                                                        "end": 336
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "e",
                                                                                        "rawText": "e",
                                                                                        "flags": 96,
                                                                                        "start": 336,
                                                                                        "end": 340
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 336,
                                                                                    "end": 340
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 317,
                                                                                "end": 340
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 341,
                                                                                "end": 341
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 317,
                                                                            "end": 342
                                                                        },
                                                                        "chain": {
                                                                            "kind": 206,
                                                                            "chain": {
                                                                                "kind": 202,
                                                                                "chain": null,
                                                                                "expression": {
                                                                                    "kind": 67174651,
                                                                                    "text": "#method",
                                                                                    "flags": 96,
                                                                                    "start": 344,
                                                                                    "end": 351
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 344,
                                                                                "end": 351
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 344,
                                                                            "end": 351
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 317,
                                                                        "end": 351
                                                                    },
                                                                    "chain": {
                                                                        "kind": 202,
                                                                        "chain": {
                                                                            "kind": 206,
                                                                            "chain": {
                                                                                "kind": 204,
                                                                                "chain": null,
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 134299649,
                                                                                            "text": "x",
                                                                                            "rawText": "x",
                                                                                            "flags": 96,
                                                                                            "start": 354,
                                                                                            "end": 355
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 354,
                                                                                    "end": 355
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 353,
                                                                                "end": 356
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 353,
                                                                            "end": 356
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 96,
                                                                            "start": 356,
                                                                            "end": 360
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 356,
                                                                        "end": 360
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 317,
                                                                    "end": 360
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 361,
                                                                    "end": 361
                                                                },
                                                                "flags": 32,
                                                                "start": 317,
                                                                "end": 362
                                                            },
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": {
                                                                    "kind": 206,
                                                                    "chain": {
                                                                        "kind": 202,
                                                                        "chain": null,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "start": 364,
                                                                            "end": 367
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 364,
                                                                        "end": 367
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 364,
                                                                    "end": 367
                                                                },
                                                                "expression": {
                                                                    "kind": 67174651,
                                                                    "text": "#method",
                                                                    "flags": 96,
                                                                    "start": 368,
                                                                    "end": 375
                                                                },
                                                                "flags": 32,
                                                                "start": 367,
                                                                "end": 375
                                                            },
                                                            "flags": 32,
                                                            "start": 317,
                                                            "end": 375
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 376,
                                                                    "end": 377
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 376,
                                                            "end": 377
                                                        },
                                                        "flags": 32,
                                                        "start": 317,
                                                        "end": 378
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "start": 379,
                                                        "end": 382
                                                    },
                                                    "flags": 32,
                                                    "start": 317,
                                                    "end": 382
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 383,
                                                    "end": 383
                                                },
                                                "flags": 32,
                                                "start": 317,
                                                "end": 384
                                            },
                                            "flags": 16,
                                            "start": 317,
                                            "end": 384
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 268,
                                    "end": 384
                                },
                                "flags": 32,
                                "start": 266,
                                "end": 387
                            },
                            "flags": 0,
                            "start": 264,
                            "end": 387
                        },
                        "flags": 0,
                        "start": 249,
                        "end": 387
                    }
                ],
                "flags": 32,
                "start": 11,
                "end": 389
            },
            "flags": 16,
            "start": 0,
            "end": 389
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\t#field\n\t#method() {}\n\tbaseline() {\n\t\ta().foo\n\t\tb().foo(x)\n\t\tc()?.foo(x)\n\t\td().foo?.(x)\n\t\te()?.foo?.(x)\n\t}\n\tprivateField() {\n\t\ta().#field\n\t\tb().#field(x)\n\t\tc()?.#field(x)\n\t\td().#field?.(x)\n\t\te()?.#field?.(x)\n\t\tf()?.foo.#field(x).bar()\n\t}\n\tprivateMethod() {\n\t\ta().#method\n\t\tb().#method(x)\n\t\tc()?.#method(x)\n\t\td().#method?.(x)\n\t\te()?.#method?.(x)\n\t\tf()?.foo.#method(x).bar()\n\t}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 389
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

