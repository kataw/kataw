# Kataw parser test case

## Input

`````js
let arr: number[] = [0, 1, 2, 3];
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 8,
                                    "end": 15
                                },
                                "flags": 2097152,
                                "start": 8,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 17
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 22
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 21,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 32
            },
            "flags": 33554448,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "let arr: number[] = [0, 1, 2, 3];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

let arr:  = [0, 1, 2, 3];
```

### Diagnostics

```javascript
✔ No errors
```

