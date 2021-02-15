# Kataw parser test case

## Input

`````js
let v1 = 'abc' as const;
let v2 = `abc` as const;
let v3 = 10 as const;
let v4 = -10 as const;
let v5 = +10 as const;
let v6 = 10 as const;
let v7 = -10 as const;
let v8 = true as const;
let v9 = false as const;

let a1 = [] as const;
let a2 = [1, 2, 3] as const;
let a3 = [10, 'hello', true] as const;
let a4 = [...[1, 2, 3]] as const;
let a5 = [1, 2, 3];
let a6 = [...a5] as const;
let a8 = ['abc', ...a7] as const;

let o1 = { x: 10, y: 20 } as const;
let o2 = { a: 1, 'b': 2, ['c']: 3, d() {}, ['e' + '']: 4 } as const;
let o3 = { ...o1, ...o2 } as const;
let o5 = { ...o4 } as const;
let o7 = { ...d } as const;
let o9 = { x: 10, foo() { this.x = 20 } } as const;  // Error

let p1 = (10) as const;
let p2 = ((-10)) as const;
let p3 = ([(10)]) as const;
let p4 = [[[[10]]]] as const;

let x1 = { x: 10, y: [20, 30], z: { a: { b: 42 } } } as const;

let q1 = <const> 10;
let q2 = <const> 'abc';
let q3 = <const> true;
let q4 = <const> [1, 2, 3];
let q5 = <const> { x: 10, y: 20 };
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "let v1 = 'abc' as const;\nlet v2 = `abc` as const;\nlet v3 = 10 as const;\nlet v4 = -10 as const;\nlet v5 = +10 as const;\nlet v6 = 10 as const;\nlet v7 = -10 as const;\nlet v8 = true as const;\nlet v9 = false as const;\n\nlet a1 = [] as const;\nlet a2 = [1, 2, 3] as const;\nlet a3 = [10, 'hello', true] as const;\nlet a4 = [...[1, 2, 3]] as const;\nlet a5 = [1, 2, 3];\nlet a6 = [...a5] as const;\nlet a8 = ['abc', ...a7] as const;\n\nlet o1 = { x: 10, y: 20 } as const;\nlet o2 = { a: 1, 'b': 2, ['c']: 3, d() {}, ['e' + '']: 4 } as const;\nlet o3 = { ...o1, ...o2 } as const;\nlet o5 = { ...o4 } as const;\nlet o7 = { ...d } as const;\nlet o9 = { x: 10, foo() { this.x = 20 } } as const;  // Error\n\nlet p1 = (10) as const;\nlet p2 = ((-10)) as const;\nlet p3 = ([(10)]) as const;\nlet p4 = [[[[10]]]] as const;\n\nlet x1 = { x: 10, y: [20, 30], z: { a: { b: 42 } } } as const;\n\nlet q1 = <const> 10;\nlet q2 = <const> 'abc';\nlet q3 = <const> true;\nlet q4 = <const> [1, 2, 3];\nlet q5 = <const> { x: 10, y: 20 };",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v1",
                                "rawText": "v1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 6
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67279,
                                    "text": "abc",
                                    "rawText": "abc",
                                    "flags": 16777216,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 8,
                                    "end": 14
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 17,
                                    "end": 24
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 23
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 3,
                            "end": 23
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 23
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 24
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v2",
                                "rawText": "v2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 28,
                                "end": 31
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 4260568,
                                    "rawText": "abc",
                                    "text": "abc",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 33,
                                    "end": 39
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 42,
                                        "end": 48
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 42,
                                    "end": 49
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 39,
                                "end": 48
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 28,
                            "end": 48
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 28,
                    "end": 48
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 24,
                "end": 49
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v3",
                                "rawText": "v3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 53,
                                "end": 56
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 4261540,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 58,
                                    "end": 61
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 64,
                                        "end": 70
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 64,
                                    "end": 71
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 61,
                                "end": 70
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 53,
                            "end": 70
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 53,
                    "end": 70
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 49,
                "end": 71
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v4",
                                "rawText": "v4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 75,
                                "end": 78
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 65774,
                                    "operator": "-",
                                    "operand": {
                                        "kind": 4261540,
                                        "text": 10,
                                        "rawText": "10",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 82,
                                        "end": 84
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 80,
                                    "end": 84
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 87,
                                        "end": 93
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 87,
                                    "end": 94
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 84,
                                "end": 93
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 75,
                            "end": 93
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 75,
                    "end": 93
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 71,
                "end": 94
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v5",
                                "rawText": "v5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 98,
                                "end": 101
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 65774,
                                    "operator": "+",
                                    "operand": {
                                        "kind": 4261540,
                                        "text": 10,
                                        "rawText": "10",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 105,
                                        "end": 107
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 103,
                                    "end": 107
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 110,
                                        "end": 116
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 110,
                                    "end": 117
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 107,
                                "end": 116
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 98,
                            "end": 116
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 98,
                    "end": 116
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 94,
                "end": 117
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v6",
                                "rawText": "v6",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 121,
                                "end": 124
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 4261540,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 126,
                                    "end": 129
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 132,
                                        "end": 138
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 132,
                                    "end": 139
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 129,
                                "end": 138
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 121,
                            "end": 138
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 121,
                    "end": 138
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 117,
                "end": 139
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v7",
                                "rawText": "v7",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 143,
                                "end": 146
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 65774,
                                    "operator": "-",
                                    "operand": {
                                        "kind": 4261540,
                                        "text": 10,
                                        "rawText": "10",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 150,
                                        "end": 152
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 148,
                                    "end": 152
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 155,
                                        "end": 161
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 155,
                                    "end": 162
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 152,
                                "end": 161
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 143,
                            "end": 161
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 143,
                    "end": 161
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 139,
                "end": 162
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v8",
                                "rawText": "v8",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 166,
                                "end": 169
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 171,
                                    "end": 176
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 179,
                                        "end": 185
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 179,
                                    "end": 186
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 176,
                                "end": 185
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 166,
                            "end": 185
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 166,
                    "end": 185
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 162,
                "end": 186
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "v9",
                                "rawText": "v9",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 190,
                                "end": 193
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 195,
                                    "end": 201
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 204,
                                        "end": 210
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 204,
                                    "end": 211
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 201,
                                "end": 210
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 190,
                            "end": 210
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 190,
                    "end": 210
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 186,
                "end": 211
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a1",
                                "rawText": "a1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 216,
                                "end": 219
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 223,
                                        "end": 223
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 221,
                                    "end": 224
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 227,
                                        "end": 233
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 227,
                                    "end": 234
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 224,
                                "end": 233
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 216,
                            "end": 233
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 216,
                    "end": 233
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 211,
                "end": 234
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a2",
                                "rawText": "a2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 238,
                                "end": 241
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 4261540,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 245,
                                                "end": 246
                                            },
                                            {
                                                "kind": 4261540,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 247,
                                                "end": 249
                                            },
                                            {
                                                "kind": 4261540,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 250,
                                                "end": 252
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 245,
                                        "end": 252
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 243,
                                    "end": 253
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 256,
                                        "end": 262
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 256,
                                    "end": 263
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 253,
                                "end": 262
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 238,
                            "end": 262
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 238,
                    "end": 262
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 234,
                "end": 263
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a3",
                                "rawText": "a3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 267,
                                "end": 270
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 4261540,
                                                "text": 10,
                                                "rawText": "10",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 274,
                                                "end": 276
                                            },
                                            {
                                                "kind": 67279,
                                                "text": "hello",
                                                "rawText": "hello",
                                                "flags": 16777216,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 277,
                                                "end": 285
                                            },
                                            {
                                                "kind": 4260391,
                                                "text": true,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 286,
                                                "end": 291
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 274,
                                        "end": 291
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 272,
                                    "end": 292
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 295,
                                        "end": 301
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 295,
                                    "end": 302
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 292,
                                "end": 301
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 267,
                            "end": 301
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 267,
                    "end": 301
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 263,
                "end": 302
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a4",
                                "rawText": "a4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 306,
                                "end": 309
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 65740,
                                                "argument": {
                                                    "kind": 67207686,
                                                    "elementList": {
                                                        "kind": 65605,
                                                        "elements": [
                                                            {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 317,
                                                                "end": 318
                                                            },
                                                            {
                                                                "kind": 4261540,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 319,
                                                                "end": 321
                                                            },
                                                            {
                                                                "kind": 4261540,
                                                                "text": 3,
                                                                "rawText": "3",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 322,
                                                                "end": 324
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 317,
                                                        "end": 324
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 316,
                                                    "end": 325
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 313,
                                                "end": 325
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 313,
                                        "end": 325
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 311,
                                    "end": 326
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 329,
                                        "end": 335
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 329,
                                    "end": 336
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 326,
                                "end": 335
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 306,
                            "end": 335
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 306,
                    "end": 335
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 302,
                "end": 336
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a5",
                                "rawText": "a5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 340,
                                "end": 343
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 347,
                                            "end": 348
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 349,
                                            "end": 351
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 352,
                                            "end": 354
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 347,
                                    "end": 354
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 345,
                                "end": 355
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 340,
                            "end": 355
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 340,
                    "end": 355
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 336,
                "end": 356
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a6",
                                "rawText": "a6",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 360,
                                "end": 363
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 65740,
                                                "argument": {
                                                    "kind": 196712,
                                                    "text": "a5",
                                                    "rawText": "a5",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 370,
                                                    "end": 372
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 367,
                                                "end": 372
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 367,
                                        "end": 372
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 365,
                                    "end": 373
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 376,
                                        "end": 382
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 376,
                                    "end": 383
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 373,
                                "end": 382
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 360,
                            "end": 382
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 360,
                    "end": 382
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 356,
                "end": 383
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a8",
                                "rawText": "a8",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 387,
                                "end": 390
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 67279,
                                                "text": "abc",
                                                "rawText": "abc",
                                                "flags": 16777216,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 394,
                                                "end": 399
                                            },
                                            {
                                                "kind": 65740,
                                                "argument": {
                                                    "kind": 196712,
                                                    "text": "a7",
                                                    "rawText": "a7",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 404,
                                                    "end": 406
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 400,
                                                "end": 406
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 394,
                                        "end": 406
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 392,
                                    "end": 407
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 410,
                                        "end": 416
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 410,
                                    "end": 417
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 407,
                                "end": 416
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 387,
                            "end": 416
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 387,
                    "end": 416
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 383,
                "end": 417
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 422,
                                "end": 425
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 429,
                                                    "end": 431
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 10,
                                                    "rawText": "10",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 432,
                                                    "end": 435
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 429,
                                                "end": 435
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 436,
                                                    "end": 438
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 20,
                                                    "rawText": "20",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 439,
                                                    "end": 442
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 436,
                                                "end": 442
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 429,
                                        "end": 442
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 427,
                                    "end": 444
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 447,
                                        "end": 453
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 447,
                                    "end": 454
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 444,
                                "end": 453
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 422,
                            "end": 453
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 422,
                    "end": 453
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 417,
                "end": 454
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 458,
                                "end": 461
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
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
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 465,
                                                    "end": 467
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 468,
                                                    "end": 470
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 465,
                                                "end": 470
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 67279,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 16777216,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 471,
                                                    "end": 475
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 476,
                                                    "end": 478
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 471,
                                                "end": 478
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 55,
                                                    "expression": {
                                                        "kind": 67279,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 16777216,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 481,
                                                        "end": 484
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 131073,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 479,
                                                    "end": 485
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 486,
                                                    "end": 488
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 479,
                                                "end": 488
                                            },
                                            {
                                                "kind": 16844946,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 489,
                                                    "end": 491
                                                },
                                                "propertySetParameterList": null,
                                                "uniqueFormalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 492,
                                                    "end": 493
                                                },
                                                "isSetter": false,
                                                "isGetter": false,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 495,
                                                        "end": 495
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 493,
                                                    "end": 496
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 491,
                                                "end": 496
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 55,
                                                    "expression": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 67279,
                                                            "text": "e",
                                                            "rawText": "e",
                                                            "flags": 16777216,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 499,
                                                            "end": 502
                                                        },
                                                        "operator": "+",
                                                        "right": {
                                                            "kind": 67279,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 16777216,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 504,
                                                            "end": 507
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 499,
                                                        "end": 507
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 131073,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 497,
                                                    "end": 508
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 509,
                                                    "end": 511
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 497,
                                                "end": 511
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 465,
                                        "end": 511
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 463,
                                    "end": 513
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 516,
                                        "end": 522
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 516,
                                    "end": 523
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 513,
                                "end": 522
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 458,
                            "end": 522
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 458,
                    "end": 522
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 454,
                "end": 523
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "o3",
                                "rawText": "o3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 527,
                                "end": 530
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65741,
                                                "argument": {
                                                    "kind": 196712,
                                                    "text": "o1",
                                                    "rawText": "o1",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 538,
                                                    "end": 540
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 4104,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 538,
                                                "end": 540
                                            },
                                            {
                                                "kind": 65741,
                                                "argument": {
                                                    "kind": 196712,
                                                    "text": "o2",
                                                    "rawText": "o2",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 545,
                                                    "end": 547
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 4104,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 545,
                                                "end": 547
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 534,
                                        "end": 547
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 532,
                                    "end": 549
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 552,
                                        "end": 558
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 552,
                                    "end": 559
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 549,
                                "end": 558
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 527,
                            "end": 558
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 527,
                    "end": 558
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 523,
                "end": 559
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "o5",
                                "rawText": "o5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 563,
                                "end": 566
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65741,
                                                "argument": {
                                                    "kind": 196712,
                                                    "text": "o4",
                                                    "rawText": "o4",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 574,
                                                    "end": 576
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 4104,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 574,
                                                "end": 576
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 570,
                                        "end": 576
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 568,
                                    "end": 578
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 581,
                                        "end": 587
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 581,
                                    "end": 588
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 578,
                                "end": 587
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 563,
                            "end": 587
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 563,
                    "end": 587
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 559,
                "end": 588
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "o7",
                                "rawText": "o7",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 592,
                                "end": 595
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65741,
                                                "argument": {
                                                    "kind": 196712,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 603,
                                                    "end": 604
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 4104,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 603,
                                                "end": 604
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 599,
                                        "end": 604
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 597,
                                    "end": 606
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 609,
                                        "end": 615
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 609,
                                    "end": 616
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 606,
                                "end": 615
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 592,
                            "end": 615
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 592,
                    "end": 615
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 588,
                "end": 616
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "o9",
                                "rawText": "o9",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 620,
                                "end": 623
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 627,
                                                    "end": 629
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 10,
                                                    "rawText": "10",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 630,
                                                    "end": 633
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 627,
                                                "end": 633
                                            },
                                            {
                                                "kind": 16844946,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 634,
                                                    "end": 638
                                                },
                                                "propertySetParameterList": null,
                                                "uniqueFormalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 639,
                                                    "end": 640
                                                },
                                                "isSetter": false,
                                                "isGetter": false,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 65550,
                                                                    "left": {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 4260571,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 642,
                                                                            "end": 647
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 648,
                                                                            "end": 649
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 647,
                                                                        "end": 649
                                                                    },
                                                                    "operator": "=",
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 20,
                                                                        "rawText": "20",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 651,
                                                                        "end": 654
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 642,
                                                                    "end": 654
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 642,
                                                                "end": 654
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 642,
                                                        "end": 654
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 640,
                                                    "end": 656
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 638,
                                                "end": 656
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 627,
                                        "end": 656
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 625,
                                    "end": 658
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 661,
                                        "end": 667
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 661,
                                    "end": 668
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 658,
                                "end": 667
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 620,
                            "end": 667
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 620,
                    "end": 667
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 616,
                "end": 668
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "p1",
                                "rawText": "p1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 683,
                                "end": 686
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 4261540,
                                        "text": 10,
                                        "rawText": "10",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 690,
                                        "end": 692
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 688,
                                    "end": 693
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 696,
                                        "end": 702
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 696,
                                    "end": 703
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 693,
                                "end": 702
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 683,
                            "end": 702
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 683,
                    "end": 702
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 668,
                "end": 703
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "p2",
                                "rawText": "p2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 707,
                                "end": 710
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 66224,
                                        "expression": {
                                            "kind": 65774,
                                            "operator": "-",
                                            "operand": {
                                                "kind": 4261540,
                                                "text": 10,
                                                "rawText": "10",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 716,
                                                "end": 718
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 715,
                                            "end": 718
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 714,
                                        "end": 719
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 712,
                                    "end": 720
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 723,
                                        "end": 729
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 723,
                                    "end": 730
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 720,
                                "end": 729
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 707,
                            "end": 729
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 707,
                    "end": 729
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 703,
                "end": 730
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "p3",
                                "rawText": "p3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 734,
                                "end": 737
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 67207686,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 66224,
                                                    "expression": {
                                                        "kind": 4261540,
                                                        "text": 10,
                                                        "rawText": "10",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 743,
                                                        "end": 745
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 742,
                                                    "end": 746
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 742,
                                            "end": 746
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 741,
                                        "end": 747
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 739,
                                    "end": 748
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 751,
                                        "end": 757
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 751,
                                    "end": 758
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 748,
                                "end": 757
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 734,
                            "end": 757
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 734,
                    "end": 757
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 730,
                "end": 758
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "p4",
                                "rawText": "p4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 762,
                                "end": 765
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 67207686,
                                                "elementList": {
                                                    "kind": 65605,
                                                    "elements": [
                                                        {
                                                            "kind": 67207686,
                                                            "elementList": {
                                                                "kind": 65605,
                                                                "elements": [
                                                                    {
                                                                        "kind": 67207686,
                                                                        "elementList": {
                                                                            "kind": 65605,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 4261540,
                                                                                    "text": 10,
                                                                                    "rawText": "10",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 772,
                                                                                    "end": 774
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 772,
                                                                            "end": 774
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 771,
                                                                        "end": 775
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 771,
                                                                "end": 775
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 770,
                                                            "end": 776
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 770,
                                                    "end": 776
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 769,
                                                "end": 777
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 769,
                                        "end": 777
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 767,
                                    "end": 778
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 781,
                                        "end": 787
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 781,
                                    "end": 788
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 778,
                                "end": 787
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 762,
                            "end": 787
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 762,
                    "end": 787
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 758,
                "end": 788
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "x1",
                                "rawText": "x1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 793,
                                "end": 796
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65546,
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 800,
                                                    "end": 802
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 10,
                                                    "rawText": "10",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 803,
                                                    "end": 806
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 800,
                                                "end": 806
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 807,
                                                    "end": 809
                                                },
                                                "right": {
                                                    "kind": 67207686,
                                                    "elementList": {
                                                        "kind": 65605,
                                                        "elements": [
                                                            {
                                                                "kind": 4261540,
                                                                "text": 20,
                                                                "rawText": "20",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 812,
                                                                "end": 814
                                                            },
                                                            {
                                                                "kind": 4261540,
                                                                "text": 30,
                                                                "rawText": "30",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 815,
                                                                "end": 818
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 812,
                                                        "end": 818
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 810,
                                                    "end": 819
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 807,
                                                "end": 819
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 820,
                                                    "end": 822
                                                },
                                                "right": {
                                                    "kind": 67224232,
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
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 825,
                                                                    "end": 827
                                                                },
                                                                "right": {
                                                                    "kind": 67224232,
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
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 830,
                                                                                    "end": 832
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4261540,
                                                                                    "text": 42,
                                                                                    "rawText": "42",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 833,
                                                                                    "end": 836
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 830,
                                                                                "end": 836
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 830,
                                                                        "end": 836
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 828,
                                                                    "end": 838
                                                                },
                                                                "accessModifier": null,
                                                                "decorators": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 825,
                                                                "end": 838
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 825,
                                                        "end": 838
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 823,
                                                    "end": 840
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 820,
                                                "end": 840
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 800,
                                        "end": 840
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 798,
                                    "end": 842
                                },
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 845,
                                        "end": 851
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 845,
                                    "end": 852
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 842,
                                "end": 851
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 793,
                            "end": 851
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 793,
                    "end": 851
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 788,
                "end": 852
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "q1",
                                "rawText": "q1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 857,
                                "end": 860
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 228,
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 864,
                                        "end": 869
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 864,
                                    "end": 870
                                },
                                "expression": {
                                    "kind": 4261540,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 870,
                                    "end": 873
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 862,
                                "end": 873
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 857,
                            "end": 873
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 857,
                    "end": 873
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 852,
                "end": 874
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "q2",
                                "rawText": "q2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 878,
                                "end": 881
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 228,
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 885,
                                        "end": 890
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 885,
                                    "end": 891
                                },
                                "expression": {
                                    "kind": 67279,
                                    "text": "abc",
                                    "rawText": "abc",
                                    "flags": 16777216,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 891,
                                    "end": 897
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 883,
                                "end": 897
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 878,
                            "end": 897
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 878,
                    "end": 897
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 874,
                "end": 898
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "q3",
                                "rawText": "q3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 902,
                                "end": 905
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 228,
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 909,
                                        "end": 914
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 909,
                                    "end": 915
                                },
                                "expression": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 915,
                                    "end": 920
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 907,
                                "end": 920
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 902,
                            "end": 920
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 902,
                    "end": 920
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 898,
                "end": 921
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "q4",
                                "rawText": "q4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 925,
                                "end": 928
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 228,
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 932,
                                        "end": 937
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 932,
                                    "end": 938
                                },
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 4261540,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 940,
                                                "end": 941
                                            },
                                            {
                                                "kind": 4261540,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 942,
                                                "end": 944
                                            },
                                            {
                                                "kind": 4261540,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 945,
                                                "end": 947
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 940,
                                        "end": 947
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 938,
                                    "end": 948
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 930,
                                "end": 948
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 925,
                            "end": 948
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 925,
                    "end": 948
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 921,
                "end": 949
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "q5",
                                "rawText": "q5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 953,
                                "end": 956
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 228,
                                "type": {
                                    "kind": 236,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "const",
                                        "rawText": "const",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 960,
                                        "end": 965
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 960,
                                    "end": 966
                                },
                                "expression": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 968,
                                                    "end": 970
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 10,
                                                    "rawText": "10",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 971,
                                                    "end": 974
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 968,
                                                "end": 974
                                            },
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 975,
                                                    "end": 977
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 20,
                                                    "rawText": "20",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 978,
                                                    "end": 981
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 975,
                                                "end": 981
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 968,
                                        "end": 981
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 966,
                                    "end": 983
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 958,
                                "end": 983
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 953,
                            "end": 983
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 953,
                    "end": 983
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 949,
                "end": 984
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 984
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 984
}
```

### Printed


```javascript

let v1 = "abc" as const;

let v2 = abc as const;

let v3 = 10 as const;

let v4 = - 10 as const;

let v5 = + 10 as const;

let v6 = 10 as const;

let v7 = - 10 as const;

let v8 = true as const;

let v9 = false as const;

let a1 = [] as const;

let a2 = [1, 2, 3] as const;

let a3 = [10, "hello", true] as const;

let a4 = [...[1, 2, 3]] as const;

let a5 = [1, 2, 3];

let a6 = [...a5] as const;

let a8 = ["abc", ...a7] as const;

let o1 = { x : 10, y : 20 } as const;

let o2 = { a : 1, "b" : 2, ["c"] : 3, d() { }, ["e" + ""] : 4 } as const;

let o3 = { ...o1, ...o2 } as const;

let o5 = { ...o4 } as const;

let o7 = { ...d } as const;

let o9 = { x : 10, foo() { this.x = 20 } } as const;

let p1 = (10) as const;

let p2 = ((- 10)) as const;

let p3 = ([(10)]) as const;

let p4 = [[[[10]]]] as const;

let x1 = { x : 10, y : [20, 30], z : { a : { b : 42 } } } as const;

let q1 = <const>10;

let q2 = <const>"abc";

let q3 = <const>true;

let q4 = <const>[1, 2, 3];

let q5 = <const>{ x : 10, y : 20 };

```

### Diagnostics


```javascript
No errors!
```
