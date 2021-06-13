# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
const a = [ -1 ];
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 134318643,
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "operand": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 11,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 16
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 16
            },
            "flags": 33554448,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "const a = [ -1 ];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

const a = [-1];
```

### Diagnostics

```javascript
✔ No errors
```

