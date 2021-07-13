# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
const array = [
    /* element 1*/
    1
    /* end of element 1 */,
    2
    /* end of element 2 */
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 40
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 68,
                                        "end": 74
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 74
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 13,
                            "end": 103
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 103
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 103
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 104
        }
    ],
    "isModule": true,
    "source": "const array = [\n    /* element 1*/\n    1\n    /* end of element 1 */,\n    2\n    /* end of element 2 */\n];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
const array = [/* element 1*/ 1, 2];
```

### Diagnostics

```javascript
✔ No errors
```

