# Kataw parser test case

## Input

`````js
for (let [...[foo, bar],] = obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
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
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 17
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 14,
                                                        "end": 17
                                                    },
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "start": 18,
                                                            "end": 22
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 18,
                                                        "end": 22
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 14,
                                                "end": 22
                                            },
                                            "flags": 32,
                                            "start": 13,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "start": 10,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 27,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 31
                    }
                ],
                "flags": 33554448,
                "start": 8,
                "end": 31
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 31,
                "end": 31
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "for (let [...[foo, bar],] = obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Rest element must be last element - start: 24, end: 25
✖ ',' expected - start: 31, end: 32
✖ Expression expected - start: 31, end: 32

```

