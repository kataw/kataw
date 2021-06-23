# Kataw parser test case

## Input

`````js
opaque type Good: {x: string} = {x: string, y: number};
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
                "text": "Good",
                "rawText": "Good",
                "flags": 96,
                "start": 11,
                "end": 16
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
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 19,
                            "end": 20
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 20,
                            "end": 21
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "string",
                                "rawText": "string",
                                "flags": 96,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 28
            },
            "flags": 16,
            "start": 17,
            "end": 31
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 33,
                            "end": 34
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 34,
                            "end": 35
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "string",
                                        "rawText": "string",
                                        "flags": 96,
                                        "start": 35,
                                        "end": 42
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 43,
                                        "end": 45
                                    }
                                ],
                                "flags": 32,
                                "start": 35,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 35,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 33,
                "end": 45
            },
            "flags": 16,
            "start": 31,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "start": 46,
                "end": 53
            },
            "flags": 16,
            "start": 46,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 54,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "opaque type Good: {x: string} = {x: string, y: number};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 16, end: 17
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 31, end: 33
✖ Expected a `;` - start: 45, end: 46
✖ Declaration or statement expected - start: 53, end: 54

```

