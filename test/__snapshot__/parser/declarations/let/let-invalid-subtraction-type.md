# Kataw parser test case

## Input

`````js
let x: -;
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "name": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 6,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 6,
                                "end": 8
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 8
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 8
            },
            "flags": 33554448,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "let x: -;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a valid subtraction operand - start: 8, end: 9

```

