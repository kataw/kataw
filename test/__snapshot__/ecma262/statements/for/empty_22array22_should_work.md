# Kataw parser test case

## Input

`````js
for (let [] = x;;);
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
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 10,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 11
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 15
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 15
                },
                "flags": 33554448,
                "start": 0,
                "end": 15
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 18,
                "end": 19
            },
            "flags": 80,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (let [] = x;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

for (let [] = x;;)
  ;

```

### Diagnostics

```javascript
✔ No errors
```

