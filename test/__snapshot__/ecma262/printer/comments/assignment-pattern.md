# Kataw parser test case

## Input

`````js
 const { a /* comment */ = 1 } = b;

const { c = 1 /* comment */ } = d;

let {d //comment
= b} = c
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
                "end": 6
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "start": 8,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 30
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 32,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 6,
                        "end": 34
                    }
                ],
                "flags": 16777232,
                "start": 6,
                "end": 34
            },
            "flags": 33554448,
            "start": 0,
            "end": 35
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 35,
                "end": 42
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "flags": 0,
                                        "start": 44,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 44,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 42,
                            "end": 66
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 68,
                            "end": 70
                        },
                        "flags": 16,
                        "start": 42,
                        "end": 70
                    }
                ],
                "flags": 16777232,
                "start": 42,
                "end": 70
            },
            "flags": 33554448,
            "start": 35,
            "end": 71
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 71,
                "end": 76
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 78,
                                            "end": 79
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 91,
                                            "end": 93
                                        },
                                        "flags": 0,
                                        "start": 78,
                                        "end": 93
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 78,
                                "end": 93
                            },
                            "flags": 32,
                            "start": 76,
                            "end": 94
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 96,
                            "end": 98
                        },
                        "flags": 16,
                        "start": 76,
                        "end": 98
                    }
                ],
                "flags": 17,
                "start": 76,
                "end": 98
            },
            "flags": 33554448,
            "start": 71,
            "end": 98
        }
    ],
    "isModule": false,
    "source": " const { a /* comment */ = 1 } = b;\n\nconst { c = 1 /* comment */ } = d;\n\nlet {d //comment\n= b} = c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript

const {a = 1} = b;
const {c = 1} = d;
let {d = b} = c;
```

### Diagnostics

```javascript
✔ No errors
```

