# Kataw parser test case

## Input

`````js
for (let [,foo] = arr);

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
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "start": 10,
                                        "end": 10
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
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
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "start": 17,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 21
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 21,
                "end": 21
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 22,
                "end": 23
            },
            "flags": 80,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for (let [,foo] = arr);\n",
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
✖ ',' expected - start: 21, end: 22
✖ Identifier expected - start: 21, end: 22

```

