# Kataw parser test case

## Input

`````js
class C {
    /**
     * @param {number} n
     * @return {number}
     */
    m = n => n * 2;
}

const c = new C();
c.m = n => n * 3;
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                                "text": "m",
                                "rawText": "m",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 80
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 84
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 87
                                },
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "n",
                                        "rawText": "n",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 87,
                                        "end": 89
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 89,
                                        "end": 91
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 93
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 87,
                                    "end": 93
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 93
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 93
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 93,
                            "end": 94
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 94
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 96
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 96,
                "end": 103
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 103,
                            "end": 105
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 111
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 113
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 114
                            },
                            "flags": 96,
                            "transformFlags": 2048,
                            "start": 107,
                            "end": 115
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 103,
                        "end": 115
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 103,
                "end": 115
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 96,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 116,
                        "end": 118
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "m",
                        "rawText": "m",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 120
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 116,
                    "end": 120
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 122
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 122,
                        "end": 124
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 124,
                        "end": 127
                    },
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 127,
                            "end": 129
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 129,
                            "end": 131
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 131,
                            "end": 133
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 127,
                        "end": 133
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 133
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 116,
                "end": 133
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 116,
            "end": 134
        }
    ],
    "isModule": false,
    "source": "class C {\n    /**\n     * @param {number} n\n     * @return {number}\n     */\n    m = n => n * 2;\n}\n\nconst c = new C();\nc.m = n => n * 3;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 134
}
```

### Printed

```javascript
class C {
  /**
     * @param {number} n
     * @return {number}
     */m = n => n * 2;;
}
const c = new C();

c.m = n => n * 3;

```

### Diagnostics

```javascript
✔ No errors
```

