# Kataw parser test case

## Input

`````js
const array = [
    /* element 1 */ 1, /* end of element 1 */
];
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
                                        "flags": 97,
                                        "start": 15,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 15,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 63
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 63
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 63
            },
            "flags": 33554448,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "const array = [\n    /* element 1 */ 1, /* end of element 1 */\n];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

 const array = [1]; 
```

### Diagnostics

```javascript
✔ No errors
```

