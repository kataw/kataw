# Kataw parser test case

## Input

`````js
for (let [...foo,] of obj);
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 18,
                "end": 21
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 18
                    }
                ],
                "flags": 33554448,
                "start": 8,
                "end": 18
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 21,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 26,
                "end": 27
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "for (let [...foo,] of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Rest element must be last element - start: 17, end: 18

```

