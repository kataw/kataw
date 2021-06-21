# Kataw parser test case

## Input

`````js
for (let {x : y} = obj;;);
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
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 329,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "value": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 10,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 16
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 18,
                                "end": 22
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 22
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 22
                },
                "flags": 33554448,
                "start": 0,
                "end": 22
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 25,
                "end": 26
            },
            "flags": 80,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (let {x : y} = obj;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

for (let {
    x: y
  } = obj;; ; );
```

### Diagnostics

```javascript
✔ No errors
```

