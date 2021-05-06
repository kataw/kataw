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
                "flags": 0,
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
                            "flags": 96,
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
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "age",
                                                    "rawText": "age",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 20
                                                },
                                                "operatorToken": {
                                                    "kind": 34880,
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 23
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 17,
                                                    "rawText": "17",
                                                    "flags": 96,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "flags": 32,
                                                "start": 17,
                                                "end": 26
                                            },
                                            "flags": 32,
                                            "start": 13,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "Too young",
                                            "rawText": "'Too young'",
                                            "flags": 4194400,
                                            "start": 29,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 13,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 43
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 43
            },
            "flags": 33554448,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "const map = {\n  [age <= 17] : 'Too young'\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

const map = { : "'Too young'" };
```

### Diagnostics

```javascript
✔ No errors
```

