# Kataw parser test case

## Input

`````js
for (let foo = arr, [bar] = arr2;;);
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
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 0,
                    "end": 8
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 8,
                                "end": 12
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "arr",
                                "rawText": "arr",
                                "flags": 96,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 18
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 24
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 25
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "arr2",
                                "rawText": "arr2",
                                "flags": 96,
                                "start": 27,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 32
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 32
                },
                "flags": 33554448,
                "start": 0,
                "end": 32
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 35,
                "end": 36
            },
            "flags": 80,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "for (let foo = arr, [bar] = arr2;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

for (let foo = arr, [bar] = arr2; ; );
```

### Diagnostics

```javascript
✔ No errors
```

