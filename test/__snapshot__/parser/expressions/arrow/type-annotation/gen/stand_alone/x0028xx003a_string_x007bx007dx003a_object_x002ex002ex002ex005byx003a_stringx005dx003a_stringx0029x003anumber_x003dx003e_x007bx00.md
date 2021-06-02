# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/expressions/arrow/type-annotation/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\type-annotation\gen\stand_alone
> :: test: stand alone
> :: case: (x: string, {}: object, ...[y: string]: string):number =>  {};
## Input

`````js
(x: string, {}: object, ...[y: string]: string):number =>  {};
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
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
                        "start": 3,
                        "end": 10
                    },
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 48,
                        "start": 11,
                        "end": 14
                    }
                ],
                "flags": 32,
                "start": 3,
                "end": 14
            },
            "flags": 16,
            "start": 3,
            "end": 14
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
                        "start": 15,
                        "end": 22
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 23,
                        "end": 23
                    }
                ],
                "flags": 32,
                "start": 15,
                "end": 23
            },
            "flags": 16,
            "start": 15,
            "end": 23
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
                            "start": 28,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 28,
                    "end": 29
                },
                "flags": 32,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 30,
                "end": 37
            },
            "flags": 16,
            "start": 30,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 39,
                "end": 46
            },
            "flags": 16,
            "start": 39,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 54,
                    "end": 57
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 48,
                    "end": 54
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
                        "start": 60,
                        "end": 60
                    },
                    "flags": 32,
                    "start": 57,
                    "end": 61
                },
                "flags": 32,
                "start": 48,
                "end": 61
            },
            "flags": 16,
            "start": 48,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "(x: string, {}: object, ...[y: string]: string):number =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 2, end: 3
✖ Expected a `;` - start: 14, end: 15
✖ Identifier expected - start: 23, end: 27
✖ ',' expected - start: 29, end: 30
✖ Expected a `;` - start: 37, end: 38
✖ Declaration or statement expected - start: 38, end: 39
✖ Expected a `;` - start: 46, end: 47
✖ Declaration or statement expected - start: 47, end: 48

```

