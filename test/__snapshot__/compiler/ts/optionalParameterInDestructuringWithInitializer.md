# Kataw parser test case

## Input

`````js
declare function f(a:number,b:number): void;

function func1( {a, b}: {a: number, b?: number} = {a: 1, b: 2} ) {
  f(a, b)
  // error
}

function func2( {a, b = 3}: {a: number, b?:number} = {a: 1,b: 2} ) {
  f(a, b)
  // no error
}

function func3( {a, b}: {a: number, b?: number} = {a: 1} ) {
  f(a,b)
  // error
}

function func4( {a: {b, c}, d}: {a: {b: number,c?: number},d: number} = {a: {b: 1,c: 2},d: 3} ) {
  f(b,c)
  // error
}

function func5({a: {b, c = 4}, d}: {a: {b: number,c?: number},d: number} = {a: {b: 1,c: 2},d: 3} ) {
  f(b, c)
  // no error
}

function func6( {a: {b, c} = {b: 4, c: 5}, d}: {a: {b: number, c?: number}, d: number} = {a: {b: 1,c: 2}, d: 3} ) {
  f(b, c)
  // error
}

function func7( {a: {b, c = 6} = {b: 4, c: 5}, d}: {a: {b: number, c?: number}, d: number} = {a: {b: 1, c: 2}, d: 3} ) {
  f(b, c)
  // no error
}

interface Foo {
  readonly bar?: number;
}

function performFoo({ bar }: Foo = {}) {
  useBar(bar);
}

declare function useBar(bar: number): void;

performFoo();

function performFoo2({ bar = null }: Foo = {}) {
  useBar2(bar);
}

declare function useBar2(bar: number | undefined): void;

performFoo2();

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare function f(a:number,b:number): void;\n\nfunction func1( {a, b}: {a: number, b?: number} = {a: 1, b: 2} ) {\n  f(a, b)\n  // error\n}\n\nfunction func2( {a, b = 3}: {a: number, b?:number} = {a: 1,b: 2} ) {\n  f(a, b)\n  // no error\n}\n\nfunction func3( {a, b}: {a: number, b?: number} = {a: 1} ) {\n  f(a,b)\n  // error\n}\n\nfunction func4( {a: {b, c}, d}: {a: {b: number,c?: number},d: number} = {a: {b: 1,c: 2},d: 3} ) {\n  f(b,c)\n  // error\n}\n\nfunction func5({a: {b, c = 4}, d}: {a: {b: number,c?: number},d: number} = {a: {b: 1,c: 2},d: 3} ) {\n  f(b, c)\n  // no error\n}\n\nfunction func6( {a: {b, c} = {b: 4, c: 5}, d}: {a: {b: number, c?: number}, d: number} = {a: {b: 1,c: 2}, d: 3} ) {\n  f(b, c)\n  // error\n}\n\nfunction func7( {a: {b, c = 6} = {b: 4, c: 5}, d}: {a: {b: number, c?: number}, d: number} = {a: {b: 1, c: 2}, d: 3} ) {\n  f(b, c)\n  // no error\n}\n\ninterface Foo {\n  readonly bar?: number;\n}\n\nfunction performFoo({ bar }: Foo = {}) {\n  useBar(bar);\n}\n\ndeclare function useBar(bar: number): void;\n\nperformFoo();\n\nfunction performFoo2({ bar = null }: Foo = {}) {\n  useBar2(bar);\n}\n\ndeclare function useBar2(bar: number | undefined): void;\n\nperformFoo2();\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 16,
                "end": 18
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 19,
                            "end": 20
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 27
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 27
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 28,
                            "end": 29
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 30,
                            "end": 36
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 28,
                        "end": 36
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 37
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 38,
                "end": 43
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 44
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "func1",
                "rawText": "func1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 54,
                "end": 60
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 63,
                                            "end": 64
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 63,
                                        "end": 64
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 65,
                                            "end": 67
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 65,
                                        "end": 67
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 63,
                                "end": 67
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 61,
                            "end": 68
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 72
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 73,
                                            "end": 80
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 71,
                                        "end": 81
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 81,
                                            "end": 83
                                        },
                                        "isOptional": true,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 85,
                                            "end": 92
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 81,
                                        "end": 92
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 71,
                                "end": 93
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 69,
                            "end": 93
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 97,
                                            "end": 98
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 99,
                                            "end": 101
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 97,
                                        "end": 101
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 102,
                                            "end": 104
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 105,
                                            "end": 107
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 102,
                                        "end": 107
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 107
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 108
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 61,
                        "end": 108
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 110
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 112,
                                    "end": 116
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 117,
                                            "end": 118
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 119,
                                            "end": 121
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 32768,
                                    "symbol": null,
                                    "start": 118,
                                    "end": 122
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 116,
                                "end": 122
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 122
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 122
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 110,
                "end": 135
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 44,
            "end": 135
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "func2",
                "rawText": "func2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 145,
                "end": 151
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 154,
                                            "end": 155
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 154,
                                        "end": 155
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 156,
                                            "end": 158
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 160,
                                            "end": 162
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 156,
                                        "end": 162
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 154,
                                "end": 162
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 152,
                            "end": 163
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 166,
                                            "end": 167
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 168,
                                            "end": 175
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 166,
                                        "end": 176
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 176,
                                            "end": 178
                                        },
                                        "isOptional": true,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 180,
                                            "end": 186
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 176,
                                        "end": 186
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 166,
                                "end": 187
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 164,
                            "end": 187
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 191,
                                            "end": 192
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 193,
                                            "end": 195
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 191,
                                        "end": 195
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 196,
                                            "end": 197
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 198,
                                            "end": 200
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 196,
                                        "end": 200
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 191,
                                "end": 200
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 189,
                            "end": 201
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 152,
                        "end": 201
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 152,
                "end": 203
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 205,
                                    "end": 209
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 210,
                                            "end": 211
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 212,
                                            "end": 214
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 32768,
                                    "symbol": null,
                                    "start": 211,
                                    "end": 215
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 215
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 215
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 205,
                    "end": 215
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 203,
                "end": 231
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 135,
            "end": 231
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "func3",
                "rawText": "func3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 241,
                "end": 247
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 250,
                                            "end": 251
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 250,
                                        "end": 251
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 252,
                                            "end": 254
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 252,
                                        "end": 254
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 250,
                                "end": 254
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 248,
                            "end": 255
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 258,
                                            "end": 259
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 260,
                                            "end": 267
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 258,
                                        "end": 268
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 268,
                                            "end": 270
                                        },
                                        "isOptional": true,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 272,
                                            "end": 279
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 268,
                                        "end": 279
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 258,
                                "end": 280
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 256,
                            "end": 280
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 284,
                                            "end": 285
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 286,
                                            "end": 288
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 284,
                                        "end": 288
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 284,
                                "end": 288
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 282,
                            "end": 289
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 248,
                        "end": 289
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 248,
                "end": 291
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 293,
                                    "end": 297
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 298,
                                            "end": 299
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 300,
                                            "end": 301
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 32768,
                                    "symbol": null,
                                    "start": 299,
                                    "end": 302
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 297,
                                "end": 302
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 293,
                            "end": 302
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 293,
                    "end": 302
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 291,
                "end": 315
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 231,
            "end": 315
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "func4",
                "rawText": "func4",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 325,
                "end": 331
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 334,
                                            "end": 336
                                        },
                                        "value": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 338,
                                                            "end": 339
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 338,
                                                        "end": 339
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 340,
                                                            "end": 342
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 340,
                                                        "end": 342
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 338,
                                                "end": 342
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 336,
                                            "end": 343
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 334,
                                        "end": 343
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 344,
                                            "end": 346
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 344,
                                        "end": 346
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 334,
                                "end": 346
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 332,
                            "end": 347
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 350,
                                            "end": 351
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 354,
                                                            "end": 355
                                                        },
                                                        "isOptional": false,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 356,
                                                            "end": 363
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 354,
                                                        "end": 364
                                                    },
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 364,
                                                            "end": 365
                                                        },
                                                        "isOptional": true,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 367,
                                                            "end": 374
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 364,
                                                        "end": 374
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 354,
                                                "end": 375
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 352,
                                            "end": 375
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 350,
                                        "end": 376
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 376,
                                            "end": 377
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 378,
                                            "end": 385
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 376,
                                        "end": 385
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 350,
                                "end": 386
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 348,
                            "end": 386
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 390,
                                            "end": 391
                                        },
                                        "right": {
                                            "kind": 98984,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 394,
                                                            "end": 395
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 396,
                                                            "end": 398
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 394,
                                                        "end": 398
                                                    },
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 399,
                                                            "end": 400
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 401,
                                                            "end": 403
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 399,
                                                        "end": 403
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 394,
                                                "end": 403
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 392,
                                            "end": 404
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 390,
                                        "end": 404
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 405,
                                            "end": 406
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 407,
                                            "end": 409
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 405,
                                        "end": 409
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 390,
                                "end": 409
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 388,
                            "end": 410
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 332,
                        "end": 410
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 332,
                "end": 412
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 414,
                                    "end": 418
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 419,
                                            "end": 420
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 421,
                                            "end": 422
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 32768,
                                    "symbol": null,
                                    "start": 420,
                                    "end": 423
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 418,
                                "end": 423
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 414,
                            "end": 423
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 414,
                    "end": 423
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 412,
                "end": 436
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 315,
            "end": 436
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "func5",
                "rawText": "func5",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 446,
                "end": 452
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 454,
                                            "end": 456
                                        },
                                        "value": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 458,
                                                            "end": 459
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 458,
                                                        "end": 459
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 460,
                                                            "end": 462
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 4,
                                                            "rawText": "4",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 464,
                                                            "end": 466
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 460,
                                                        "end": 466
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 458,
                                                "end": 466
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 456,
                                            "end": 467
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 454,
                                        "end": 467
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 468,
                                            "end": 470
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 468,
                                        "end": 470
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 454,
                                "end": 470
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 453,
                            "end": 471
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 474,
                                            "end": 475
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 478,
                                                            "end": 479
                                                        },
                                                        "isOptional": false,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 480,
                                                            "end": 487
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 478,
                                                        "end": 488
                                                    },
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 488,
                                                            "end": 489
                                                        },
                                                        "isOptional": true,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 491,
                                                            "end": 498
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 488,
                                                        "end": 498
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 478,
                                                "end": 499
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 476,
                                            "end": 499
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 474,
                                        "end": 500
                                    },
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 500,
                                            "end": 501
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 502,
                                            "end": 509
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 500,
                                        "end": 509
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 474,
                                "end": 510
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 472,
                            "end": 510
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 514,
                                            "end": 515
                                        },
                                        "right": {
                                            "kind": 98984,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 518,
                                                            "end": 519
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 520,
                                                            "end": 522
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 518,
                                                        "end": 522
                                                    },
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 523,
                                                            "end": 524
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 525,
                                                            "end": 527
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 523,
                                                        "end": 527
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 518,
                                                "end": 527
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 516,
                                            "end": 528
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 514,
                                        "end": 528
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 529,
                                            "end": 530
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 531,
                                            "end": 533
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 529,
                                        "end": 533
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 514,
                                "end": 533
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 512,
                            "end": 534
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 453,
                        "end": 534
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 453,
                "end": 536
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 538,
                                    "end": 542
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 543,
                                            "end": 544
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 545,
                                            "end": 547
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 32768,
                                    "symbol": null,
                                    "start": 544,
                                    "end": 548
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 542,
                                "end": 548
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 538,
                            "end": 548
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 538,
                    "end": 548
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 536,
                "end": 564
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 436,
            "end": 564
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "func6",
                "rawText": "func6",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 574,
                "end": 580
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 583,
                                            "end": 585
                                        },
                                        "value": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 587,
                                                            "end": 588
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 587,
                                                        "end": 588
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 589,
                                                            "end": 591
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 589,
                                                        "end": 591
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 587,
                                                "end": 591
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 585,
                                            "end": 592
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 583,
                                        "end": 592
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 1,
                                "symbol": null,
                                "start": 583,
                                "end": 592
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 581,
                            "end": 592
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 596,
                                            "end": 597
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 598,
                                            "end": 600
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 596,
                                        "end": 600
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 601,
                                            "end": 603
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 604,
                                            "end": 606
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 601,
                                        "end": 606
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 596,
                                "end": 606
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 594,
                            "end": 607
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 581,
                        "end": 607
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 608,
                            "end": 610
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 608,
                        "end": 610
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 581,
                "end": 611
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 564,
            "end": 610
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 614,
                            "end": 615
                        },
                        "statement": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097292,
                                        "label": {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 618,
                                            "end": 619
                                        },
                                        "statement": {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65590,
                                                "expressions": [
                                                    {
                                                        "kind": 196712,
                                                        "text": "number",
                                                        "rawText": "number",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 620,
                                                        "end": 627
                                                    },
                                                    {
                                                        "kind": 65592,
                                                        "shortCircuit": {
                                                            "kind": 196712,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 628,
                                                            "end": 630
                                                        },
                                                        "consequent": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 3,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 631,
                                                            "end": 631
                                                        },
                                                        "alternate": {
                                                            "kind": 196712,
                                                            "text": "number",
                                                            "rawText": "number",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 632,
                                                            "end": 639
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 628,
                                                        "end": 639
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 620,
                                                "end": 639
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 620,
                                            "end": 639
                                        },
                                        "isWebCompat": true,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 618,
                                        "end": 639
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 618,
                                "end": 639
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 616,
                            "end": 640
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 614,
                        "end": 640
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 614,
                "end": 640
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 612,
            "end": 640
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "d",
                "rawText": "d",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 641,
                "end": 643
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "number",
                    "rawText": "number",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 644,
                    "end": 651
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 644,
                "end": 651
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 641,
            "end": 651
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 656,
                            "end": 657
                        },
                        "statement": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097292,
                                        "label": {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 660,
                                            "end": 661
                                        },
                                        "statement": {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65590,
                                                "expressions": [
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 662,
                                                        "end": 664
                                                    },
                                                    {
                                                        "kind": 196712,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 665,
                                                        "end": 666
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 662,
                                                "end": 666
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 662,
                                            "end": 666
                                        },
                                        "isWebCompat": true,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 660,
                                        "end": 666
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 660,
                                "end": 666
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 658,
                            "end": 666
                        },
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 656,
                        "end": 666
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 656,
                "end": 666
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 654,
            "end": 666
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 2,
                "rawText": "2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 667,
                "end": 669
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 667,
            "end": 669
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "d",
                "rawText": "d",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 671,
                "end": 673
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 3,
                    "rawText": "3",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 674,
                    "end": 676
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 674,
                "end": 676
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 671,
            "end": 676
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "f",
                                "rawText": "f",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 681,
                                "end": 685
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 686,
                                        "end": 687
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 688,
                                        "end": 690
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 32768,
                                "symbol": null,
                                "start": 687,
                                "end": 691
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 685,
                            "end": 691
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 681,
                        "end": 691
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 681,
                "end": 691
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 679,
            "end": 704
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "func7",
                "rawText": "func7",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 714,
                "end": 720
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 723,
                                            "end": 725
                                        },
                                        "value": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 727,
                                                            "end": 728
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 727,
                                                        "end": 728
                                                    },
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 729,
                                                            "end": 731
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 6,
                                                            "rawText": "6",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 733,
                                                            "end": 735
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 729,
                                                        "end": 735
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 727,
                                                "end": 735
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 725,
                                            "end": 736
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 723,
                                        "end": 736
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 1,
                                "symbol": null,
                                "start": 723,
                                "end": 736
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 721,
                            "end": 736
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 740,
                                            "end": 741
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 742,
                                            "end": 744
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 740,
                                        "end": 744
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 745,
                                            "end": 747
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 748,
                                            "end": 750
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 745,
                                        "end": 750
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 740,
                                "end": 750
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 738,
                            "end": 751
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 721,
                        "end": 751
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 752,
                            "end": 754
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 752,
                        "end": 754
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 721,
                "end": 755
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 704,
            "end": 754
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 758,
                            "end": 759
                        },
                        "statement": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097292,
                                        "label": {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 762,
                                            "end": 763
                                        },
                                        "statement": {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65590,
                                                "expressions": [
                                                    {
                                                        "kind": 196712,
                                                        "text": "number",
                                                        "rawText": "number",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 764,
                                                        "end": 771
                                                    },
                                                    {
                                                        "kind": 65592,
                                                        "shortCircuit": {
                                                            "kind": 196712,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 772,
                                                            "end": 774
                                                        },
                                                        "consequent": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 3,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 775,
                                                            "end": 775
                                                        },
                                                        "alternate": {
                                                            "kind": 196712,
                                                            "text": "number",
                                                            "rawText": "number",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 776,
                                                            "end": 783
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 772,
                                                        "end": 783
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 764,
                                                "end": 783
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 764,
                                            "end": 783
                                        },
                                        "isWebCompat": true,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 762,
                                        "end": 783
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 762,
                                "end": 783
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 760,
                            "end": 784
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 758,
                        "end": 784
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 758,
                "end": 784
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 756,
            "end": 784
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "d",
                "rawText": "d",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 785,
                "end": 787
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "number",
                    "rawText": "number",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 788,
                    "end": 795
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 788,
                "end": 795
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 785,
            "end": 795
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 800,
                            "end": 801
                        },
                        "statement": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097292,
                                        "label": {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 804,
                                            "end": 805
                                        },
                                        "statement": {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65590,
                                                "expressions": [
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 806,
                                                        "end": 808
                                                    },
                                                    {
                                                        "kind": 196712,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 809,
                                                        "end": 811
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 806,
                                                "end": 811
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 806,
                                            "end": 811
                                        },
                                        "isWebCompat": true,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 804,
                                        "end": 811
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 804,
                                "end": 811
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 802,
                            "end": 811
                        },
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 800,
                        "end": 811
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 800,
                "end": 811
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 798,
            "end": 811
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 2,
                "rawText": "2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 812,
                "end": 814
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 812,
            "end": 814
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "d",
                "rawText": "d",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 816,
                "end": 818
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 3,
                    "rawText": "3",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 819,
                    "end": 821
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 819,
                "end": 821
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 816,
            "end": 821
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "f",
                                "rawText": "f",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 826,
                                "end": 830
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 831,
                                        "end": 832
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 833,
                                        "end": 835
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 32768,
                                "symbol": null,
                                "start": 832,
                                "end": 836
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 830,
                            "end": 836
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 826,
                        "end": 836
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 826,
                "end": 836
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 824,
            "end": 852
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 863,
                "end": 867
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 880,
                            "end": 884
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 886,
                            "end": 893
                        },
                        "isStatic": false,
                        "isReadOnly": true,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 869,
                        "end": 894
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 869,
                "end": 894
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 852,
            "end": 896
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "performFoo",
                "rawText": "performFoo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 906,
                "end": 917
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 919,
                                            "end": 923
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 919,
                                        "end": 923
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 919,
                                "end": 923
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 918,
                            "end": 925
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 926,
                                "end": 930
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 926,
                            "end": 932
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 934,
                                "end": 934
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 932,
                            "end": 935
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 918,
                        "end": 935
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 918,
                "end": 936
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "useBar",
                                    "rawText": "useBar",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 938,
                                    "end": 947
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 948,
                                            "end": 951
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "symbol": null,
                                    "start": 951,
                                    "end": 952
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 947,
                                "end": 952
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 938,
                            "end": 953
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 938,
                    "end": 953
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 936,
                "end": 955
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 896,
            "end": 955
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "useBar",
                "rawText": "useBar",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 973,
                "end": 980
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 981,
                            "end": 984
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 985,
                            "end": 992
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 981,
                        "end": 992
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 981,
                "end": 993
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 994,
                "end": 999
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 964,
            "end": 1000
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "performFoo",
                    "rawText": "performFoo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1000,
                    "end": 1012
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1014,
                    "end": 1014
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1012,
                "end": 1014
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1000,
            "end": 1015
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "performFoo2",
                "rawText": "performFoo2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1025,
                "end": 1037
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1039,
                                            "end": 1043
                                        },
                                        "right": {
                                            "kind": 4260512,
                                            "text": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1045,
                                            "end": 1050
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 1039,
                                        "end": 1050
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 1039,
                                "end": 1050
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1038,
                            "end": 1052
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1053,
                                "end": 1057
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1053,
                            "end": 1059
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1061,
                                "end": 1061
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1059,
                            "end": 1062
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1038,
                        "end": 1062
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1038,
                "end": 1063
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "useBar2",
                                    "rawText": "useBar2",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1065,
                                    "end": 1075
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1076,
                                            "end": 1079
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "symbol": null,
                                    "start": 1079,
                                    "end": 1080
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1075,
                                "end": 1080
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1065,
                            "end": 1081
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1065,
                    "end": 1081
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1063,
                "end": 1083
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 1015,
            "end": 1083
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "useBar2",
                "rawText": "useBar2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1101,
                "end": 1109
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1110,
                            "end": 1113
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 1114,
                                    "end": 1121
                                },
                                {
                                    "kind": 4202735,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 1123,
                                    "end": 1133
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1121,
                            "end": 1133
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1110,
                        "end": 1133
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1110,
                "end": 1134
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 1135,
                "end": 1140
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 1092,
            "end": 1141
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "performFoo2",
                    "rawText": "performFoo2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1141,
                    "end": 1154
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1156,
                    "end": 1156
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1154,
                "end": 1156
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1141,
            "end": 1157
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1158
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

