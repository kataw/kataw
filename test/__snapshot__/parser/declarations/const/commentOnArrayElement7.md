# Kataw parser test case

## Input

`````js
const array = [/* element 1 */ 1, /* end of element 1 */];
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
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 5,
                            "end": 11
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
                                        "flags": 96,
                                        "start": 15,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 57
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 57
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 57
            },
            "flags": 33554448,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "const array = [/* element 1 */ 1, /* end of element 1 */];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

const array = [/* element 1 */ 1,] /* end of element 1 */;
```

### Diagnostics

```javascript
✔ No errors
```

