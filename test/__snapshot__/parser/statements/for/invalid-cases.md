# Kataw parser test case

## Input

`````js
for ({a=b};;);

for ({x = y} ;1 ;1) {}

for ({x = y} ;;) {}

`````

## Output

### Hybrid CST

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
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 205,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 6,
                    "end": 9
                },
                "flags": 32,
                "start": 5,
                "end": 10
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 13,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 1,
                "start": 14,
                "end": 19
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 205,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 22,
                                "end": 23
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 22,
                    "end": 27
                },
                "flags": 32,
                "start": 21,
                "end": 28
            },
            "condition": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 33,
                "end": 34
            },
            "incrementor": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 30,
                "end": 31
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 37,
                    "end": 37
                },
                "flags": 16,
                "start": 35,
                "end": 38
            },
            "flags": 16,
            "start": 14,
            "end": 38
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 1,
                "start": 38,
                "end": 43
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 205,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 46,
                                "end": 47
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 49,
                                "end": 51
                            },
                            "flags": 32,
                            "start": 46,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 46,
                    "end": 51
                },
                "flags": 32,
                "start": 45,
                "end": 52
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 58,
                    "end": 58
                },
                "flags": 16,
                "start": 56,
                "end": 59
            },
            "flags": 16,
            "start": 38,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "for ({a=b};;);\n\nfor ({x = y} ;1 ;1) {}\n\nfor ({x = y} ;;) {}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 10, end: 11
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 28, end: 30
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 52, end: 54

```

