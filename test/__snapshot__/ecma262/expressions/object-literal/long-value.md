# Kataw parser test case

## Input

`````js
const x = {
  "ABC": "12345678901234567890123456789012345678901234567890123456789012345678901234567890"
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 5,
                            "end": 7
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
                                            "text": "ABC",
                                            "rawText": "\"ABC\"",
                                            "flags": 97,
                                            "start": 11,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "12345678901234567890123456789012345678901234567890123456789012345678901234567890",
                                            "rawText": "\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\"",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 103
                                        },
                                        "flags": 33,
                                        "start": 11,
                                        "end": 103
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 11,
                                "end": 103
                            },
                            "flags": 49,
                            "start": 9,
                            "end": 105
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 105
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 105
            },
            "flags": 33554448,
            "start": 0,
            "end": 106
        }
    ],
    "isModule": false,
    "source": "const x = {\n  \"ABC\": \"12345678901234567890123456789012345678901234567890123456789012345678901234567890\"\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 106
}
```

### Printed

```javascript

const x = {
  "\"ABC\"" : "\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\""
};

```

### Diagnostics

```javascript
✔ No errors
```

