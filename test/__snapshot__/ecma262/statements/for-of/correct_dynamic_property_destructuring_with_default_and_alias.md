# Kataw parser test case

## Input

`````js
for (let {[x]: y = z} of obj);
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
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "start": 10,
                                                "end": 13
                                            },
                                            "value": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 10,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 21
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 8,
                            "end": 21
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 21
                },
                "flags": 33554448,
                "start": 0,
                "end": 21
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 21,
                "end": 24
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 24,
                "end": 28
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 29,
                "end": 30
            },
            "flags": 80,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "for (let {[x]: y = z} of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

  for (let {
    [x]: y = z
  } of obj)
    ;

```

### Diagnostics

```javascript
✔ No errors
```

