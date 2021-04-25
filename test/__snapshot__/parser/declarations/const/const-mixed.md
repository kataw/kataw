# Kataw parser test case

## Input

`````js
const map = {
  [age <= 17] : 'Too young'
};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 37757004,
                "flags": 768,
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
                            "text": "map",
                            "rawText": "map",
                            "flags": 768,
                            "start": 5,
                            "end": 9
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
                                            "kind": 201392131,
                                            "text": "Too young",
                                            "rawText": "Too young",
                                            "flags": 67109632,
                                            "start": 29,
                                            "end": 41
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "age",
                                                    "rawText": "age",
                                                    "flags": 768,
                                                    "start": 17,
                                                    "end": 20
                                                },
                                                "operatorToken": {
                                                    "kind": 34880,
                                                    "flags": 768,
                                                    "start": 20,
                                                    "end": 23
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 17,
                                                    "rawText": "17",
                                                    "flags": 768,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "flags": 256,
                                                "start": 17,
                                                "end": 26
                                            },
                                            "flags": 256,
                                            "start": 13,
                                            "end": 27
                                        },
                                        "flags": 256,
                                        "start": 13,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 1,
                                "start": 13,
                                "end": 41
                            },
                            "flags": 256,
                            "start": 11,
                            "end": 43
                        },
                        "flags": 128,
                        "start": 5,
                        "end": 43
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 43
            },
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "const map = {\n  [age <= 17] : 'Too young'\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
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

