# Kataw parser test case

## Input

`````js
for (let [...,] of obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "left": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 13,
                                            "end": 13
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "start": 10,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 15
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 15
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 15,
                "end": 18
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 18,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 23,
                "end": 24
            },
            "flags": 80,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "for (let [...,] of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 13, end: 14
✖ A rest element must be last in a destructuring pattern - start: 10, end: 15

```

