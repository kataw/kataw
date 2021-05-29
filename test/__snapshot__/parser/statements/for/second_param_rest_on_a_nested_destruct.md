# Kataw parser test case

## Input

`````js
for (let [x, ...[foo, bar]] = obj);
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
                "flags": 80,
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
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 12,
                                            "end": 16
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
                                                            "start": 17,
                                                            "end": 20
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 17,
                                                        "end": 20
                                                    },
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "start": 21,
                                                            "end": 25
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 21,
                                                        "end": 25
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 17,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 16,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 12,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 10,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 29,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 33
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 33
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 33,
                "end": 33
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 34,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "for (let [x, ...[foo, bar]] = obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 33, end: 34
✖ Identifier expected - start: 33, end: 34

```

