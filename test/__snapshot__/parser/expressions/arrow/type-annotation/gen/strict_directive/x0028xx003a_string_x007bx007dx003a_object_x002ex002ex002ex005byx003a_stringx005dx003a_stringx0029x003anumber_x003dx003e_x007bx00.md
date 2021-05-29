# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: e
> :: test: strict directive
> :: case: (x: string, {}: object, ...[y: string]: string):number =>  {};
## Input

`````js
"use strict"; (x: string, {}: object, ...[y: string]: string):number =>  {};
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "start": 13,
                "end": 16
            },
            "flags": 16,
            "start": 13,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 17,
                        "end": 24
                    },
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 27,
                            "end": 27
                        },
                        "flags": 48,
                        "start": 25,
                        "end": 28
                    }
                ],
                "flags": 32,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "start": 17,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "object",
                        "rawText": "object",
                        "flags": 96,
                        "start": 29,
                        "end": 36
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 37,
                        "end": 37
                    }
                ],
                "flags": 32,
                "start": 29,
                "end": 37
            },
            "flags": 16,
            "start": 29,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 42,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 42,
                    "end": 43
                },
                "flags": 32,
                "start": 41,
                "end": 43
            },
            "flags": 16,
            "start": 41,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 44,
                "end": 51
            },
            "flags": 16,
            "start": 44,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 53,
                "end": 60
            },
            "flags": 16,
            "start": 53,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 68,
                    "end": 71
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 62,
                    "end": 68
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 74,
                        "end": 74
                    },
                    "flags": 32,
                    "start": 71,
                    "end": 75
                },
                "flags": 32,
                "start": 62,
                "end": 75
            },
            "flags": 16,
            "start": 62,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (x: string, {}: object, ...[y: string]: string):number =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 16, end: 17
✖ Expected '=>' - start: 16, end: 17
✖ Expected a `;` - start: 28, end: 29
✖ Identifier expected - start: 37, end: 41
✖ ',' expected - start: 43, end: 44
✖ Expected a `;` - start: 51, end: 52
✖ Declaration or statement expected - start: 52, end: 53
✖ Expected a `;` - start: 60, end: 61
✖ Declaration or statement expected - start: 61, end: 62

```

