# Kataw parser test case

## Input

`````js
let x;
let y = 0;
let [z] = [1];
let {foo} = {foo: 2};
let {q=3} = {};

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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 33554448,
            "start": 0,
            "end": 6
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 6,
                "end": 10
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 10,
                        "end": 16
                    }
                ],
                "flags": 17,
                "start": 10,
                "end": 16
            },
            "flags": 33554448,
            "start": 6,
            "end": 17
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 17,
                "end": 21
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 23,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 25
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 29,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 27,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 31
                    }
                ],
                "flags": 17,
                "start": 21,
                "end": 31
            },
            "flags": 33554448,
            "start": 17,
            "end": 32
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 32,
                "end": 36
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
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 42
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 46,
                                            "end": 49
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 50,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "start": 46,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 46,
                                "end": 52
                            },
                            "flags": 48,
                            "start": 44,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 36,
                        "end": 53
                    }
                ],
                "flags": 17,
                "start": 36,
                "end": 53
            },
            "flags": 33554448,
            "start": 32,
            "end": 54
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 54,
                "end": 58
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
                                            "text": "q",
                                            "rawText": "q",
                                            "flags": 96,
                                            "start": 60,
                                            "end": 61
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 62,
                                            "end": 63
                                        },
                                        "flags": 0,
                                        "start": 60,
                                        "end": 63
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 60,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 58,
                            "end": 64
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 68,
                                "end": 68
                            },
                            "flags": 48,
                            "start": 66,
                            "end": 69
                        },
                        "flags": 16,
                        "start": 58,
                        "end": 69
                    }
                ],
                "flags": 17,
                "start": 58,
                "end": 69
            },
            "flags": 33554448,
            "start": 54,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "let x;\nlet y = 0;\nlet [z] = [1];\nlet {foo} = {foo: 2};\nlet {q=3} = {};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

let x;
let y = 0;
let [z] = [1];
let {foo} = { foo: 2 };
let {q = 3} = {};
```

### Diagnostics

```javascript
✔ No errors
```

