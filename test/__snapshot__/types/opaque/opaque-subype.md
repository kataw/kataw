# Kataw parser test case

## Input

`````js
opaque type Counter: Box<T> = Container<T>;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 6,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "Counter",
                "rawText": "Counter",
                "flags": 96,
                "start": 11,
                "end": 19
            },
            "typeParameters": null,
            "superType": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "impltype": null,
            "flags": 2097152,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "Box",
                        "rawText": "Box",
                        "flags": 96,
                        "start": 20,
                        "end": 24
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 24,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 26,
                    "end": 27
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 27,
                    "end": 27
                },
                "flags": 32,
                "start": 20,
                "end": 27
            },
            "flags": 16,
            "start": 20,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "Container",
                        "rawText": "Container",
                        "flags": 96,
                        "start": 29,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 39,
                        "end": 40
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 40,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 41,
                    "end": 42
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 42,
                    "end": 42
                },
                "flags": 32,
                "start": 29,
                "end": 42
            },
            "flags": 16,
            "start": 29,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "opaque type Counter: Box<T> = Container<T>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 19, end: 20
✖ Identifier expected - start: 27, end: 29
✖ Identifier expected - start: 42, end: 43

```

