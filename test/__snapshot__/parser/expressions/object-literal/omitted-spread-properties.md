# Kataw parser test case

## Input

`````js
const example = (obj) => {
  const foo = 'foo';
  const { [`prefix_${foo}`]: _, ...rest } = obj;
};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "example",
                            "rawText": "example",
                            "flags": 96,
                            "start": 5,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "obj",
                                    "rawText": "obj",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 20
                                }
                            ],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 21,
                                "end": 24
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 26,
                                                "end": 34
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 34,
                                                            "end": 38
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392131,
                                                            "text": "foo",
                                                            "rawText": "'foo'",
                                                            "flags": 4194400,
                                                            "start": 40,
                                                            "end": 46
                                                        },
                                                        "flags": 16,
                                                        "start": 34,
                                                        "end": 46
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 34,
                                                "end": 46
                                            },
                                            "flags": 33554448,
                                            "start": 26,
                                            "end": 47
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 47,
                                                "end": 55
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 329,
                                                                        "key": {
                                                                            "kind": 194,
                                                                            "expression": {
                                                                                "kind": 227,
                                                                                "spans": [
                                                                                    {
                                                                                        "kind": 65764,
                                                                                        "rawText": "prefix_",
                                                                                        "text": "prefix_",
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "foo",
                                                                                            "rawText": "foo",
                                                                                            "flags": 96,
                                                                                            "start": 69,
                                                                                            "end": 72
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 59,
                                                                                        "end": 72
                                                                                    }
                                                                                ],
                                                                                "tail": {
                                                                                    "kind": 458761,
                                                                                    "text": "",
                                                                                    "rawText": "",
                                                                                    "flags": 96,
                                                                                    "start": 72,
                                                                                    "end": 74
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 59,
                                                                                "end": 74
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 57,
                                                                            "end": 75
                                                                        },
                                                                        "value": {
                                                                            "kind": 134299649,
                                                                            "text": "_",
                                                                            "rawText": "_",
                                                                            "flags": 96,
                                                                            "start": 76,
                                                                            "end": 78
                                                                        },
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "start": 57,
                                                                        "end": 78
                                                                    },
                                                                    {
                                                                        "kind": 281,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "flags": 64,
                                                                            "start": 79,
                                                                            "end": 83
                                                                        },
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "rest",
                                                                            "rawText": "rest",
                                                                            "flags": 96,
                                                                            "start": 83,
                                                                            "end": 87
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "right": null,
                                                                        "flags": 0,
                                                                        "start": 79,
                                                                        "end": 87
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 57,
                                                                "end": 87
                                                            },
                                                            "flags": 32,
                                                            "start": 55,
                                                            "end": 89
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 134299649,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 96,
                                                            "start": 91,
                                                            "end": 95
                                                        },
                                                        "flags": 16,
                                                        "start": 55,
                                                        "end": 95
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 55,
                                                "end": 95
                                            },
                                            "flags": 33554448,
                                            "start": 47,
                                            "end": 96
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 26,
                                    "end": 96
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 98
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 98
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 98
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 98
            },
            "flags": 33554448,
            "start": 0,
            "end": 99
        }
    ],
    "isModule": false,
    "source": "const example = (obj) => {\n  const foo = 'foo';\n  const { [`prefix_${foo}`]: _, ...rest } = obj;\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript

 const example = (obj) => {
const foo = 'foo';,
const {
     : _,
    ...rest
} = obj;
}; 
```

### Diagnostics

```javascript
✔ No errors
```

