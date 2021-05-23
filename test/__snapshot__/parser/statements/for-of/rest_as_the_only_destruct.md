# Kataw parser test case

## Input

`````js
for (let [...foo] of obj);
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
                "start": 17,
                "end": 20
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
                                "trailingComma": false,
                                "flags": 0,
                                "start": 10,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 17
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 17
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 20,
                "end": 24
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 25,
                "end": 26
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (let [...foo] of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

for ( of obj);
```

### Diagnostics

```javascript
✔ No errors
```

