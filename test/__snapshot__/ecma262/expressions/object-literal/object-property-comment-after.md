# Kataw parser test case

## Input

`````js
let a = {
   a /* comment */: () => 1
};

let b = {
   "a" /* comment */: () => 1
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "start": 9,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 32,
                                                "end": 35
                                            },
                                            "contents": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "start": 29,
                                            "end": 37
                                        },
                                        "flags": 33,
                                        "start": 9,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 9,
                                "end": 37
                            },
                            "flags": 49,
                            "start": 7,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 39
            },
            "flags": 33554448,
            "start": 0,
            "end": 40
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 40,
                "end": 45
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 45,
                            "end": 47
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
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "\"a\"",
                                            "flags": 97,
                                            "start": 51,
                                            "end": 58
                                        },
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 75,
                                                "end": 75
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 76,
                                                "end": 79
                                            },
                                            "contents": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 79,
                                                "end": 81
                                            },
                                            "flags": 32,
                                            "start": 73,
                                            "end": 81
                                        },
                                        "flags": 33,
                                        "start": 51,
                                        "end": 81
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 51,
                                "end": 81
                            },
                            "flags": 49,
                            "start": 49,
                            "end": 83
                        },
                        "flags": 16,
                        "start": 45,
                        "end": 83
                    }
                ],
                "flags": 17,
                "start": 45,
                "end": 83
            },
            "flags": 33554448,
            "start": 40,
            "end": 84
        }
    ],
    "isModule": false,
    "source": "let a = {\n   a /* comment */: () => 1\n};\n\nlet b = {\n   \"a\" /* comment */: () => 1\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript

let a = {
  a /* comment */ : () => 1
};
let b = {
  "\"a\"" /* comment */ : () => 1
};

```

### Diagnostics

```javascript
✔ No errors
```

