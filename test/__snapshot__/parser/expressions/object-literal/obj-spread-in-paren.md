# Kataw parser test case

## Input

`````js
({a,...obj} = foo);

({a:b,...obj} = foo);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 13,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 23,
                                    "end": 26
                                },
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 768,
                                        "start": 30,
                                        "end": 33
                                    },
                                    "flags": 256,
                                    "start": 27,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 23,
                            "end": 33
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 34
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 34,
                        "end": 36
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 36,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 40
                },
                "flags": 256,
                "start": 19,
                "end": 41
            },
            "flags": 128,
            "start": 19,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "({a,...obj} = foo);\n\n({a:b,...obj} = foo);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

