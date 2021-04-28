# Kataw parser test case

## Input

`````js
let foo;
let foo = 0;
let [foo] = [1];
let {foo} = {foo: 2};
let {foo=3} = {};

`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 7
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 8,
                "end": 12
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
                            "flags": 768,
                            "start": 12,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 12,
                        "end": 20
                    }
                ],
                "flags": 128,
                "start": 12,
                "end": 20
            },
            "flags": 129,
            "start": 8,
            "end": 21
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 21,
                "end": 25
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 27,
                                            "end": 30
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 27,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 27,
                                "end": 30
                            },
                            "flags": 256,
                            "start": 25,
                            "end": 31
                        },
                        "optionalToken": null,
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
                                        "flags": 768,
                                        "start": 35,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 35,
                                "end": 36
                            },
                            "flags": 256,
                            "start": 33,
                            "end": 37
                        },
                        "flags": 128,
                        "start": 25,
                        "end": 37
                    }
                ],
                "flags": 128,
                "start": 25,
                "end": 37
            },
            "flags": 129,
            "start": 21,
            "end": 38
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 38,
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
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 44,
                                            "end": 47
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 44,
                                        "end": 47
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 44,
                                "end": 47
                            },
                            "flags": 256,
                            "start": 42,
                            "end": 48
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 768,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 52,
                                            "end": 55
                                        },
                                        "flags": 256,
                                        "start": 52,
                                        "end": 58
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 52,
                                "end": 58
                            },
                            "flags": 256,
                            "start": 50,
                            "end": 59
                        },
                        "flags": 128,
                        "start": 42,
                        "end": 59
                    }
                ],
                "flags": 128,
                "start": 42,
                "end": 59
            },
            "flags": 129,
            "start": 38,
            "end": 60
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 60,
                "end": 64
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
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 66,
                                            "end": 69
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 768,
                                            "start": 70,
                                            "end": 71
                                        },
                                        "flags": 256,
                                        "start": 66,
                                        "end": 71
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 66,
                                "end": 71
                            },
                            "flags": 256,
                            "start": 64,
                            "end": 72
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 76,
                                "end": 76
                            },
                            "flags": 256,
                            "start": 74,
                            "end": 77
                        },
                        "flags": 128,
                        "start": 64,
                        "end": 77
                    }
                ],
                "flags": 128,
                "start": 64,
                "end": 77
            },
            "flags": 129,
            "start": 60,
            "end": 78
        }
    ],
    "isModule": false,
    "text": "let foo;\nlet foo = 0;\nlet [foo] = [1];\nlet {foo} = {foo: 2};\nlet {foo=3} = {};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
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

