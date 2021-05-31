# Kataw parser test case

## Input

`````js
for (let [foo,,] = arr);
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
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 13
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "start": 14,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "start": 10,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "start": 18,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 22
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 22
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 22,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 23,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "for (let [foo,,] = arr);",
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
✖ ',' expected - start: 22, end: 23
✖ Identifier expected - start: 22, end: 23

```

