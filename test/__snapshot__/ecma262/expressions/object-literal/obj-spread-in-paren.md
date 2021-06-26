# Kataw parser test case

## Input

`````js
({a,...obj} = foo);

({a:b,...obj} = foo);
`````

## Output

### CST

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
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 7
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 10
                                    },
                                    "flags": 1073741856,
                                    "start": 4,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 13,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 26
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 27,
                                        "end": 30
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 33
                                    },
                                    "flags": 1073741856,
                                    "start": 27,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 23,
                            "end": 33
                        },
                        "flags": 48,
                        "start": 22,
                        "end": 34
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 34,
                        "end": 36
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 36,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 40
                },
                "flags": 32,
                "start": 19,
                "end": 41
            },
            "flags": 16,
            "start": 19,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "({a,...obj} = foo);\n\n({a:b,...obj} = foo);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

({ a, ...obj } = foo);
({ a: b, ...obj } = foo);
```

### Diagnostics

```javascript
✔ No errors
```

