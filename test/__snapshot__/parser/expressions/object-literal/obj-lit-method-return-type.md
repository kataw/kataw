# Kataw parser test case

## Input

`````js
x = { method(test: string): number { } };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": " method",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 13,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 13,
                                    "end": 18
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": " string",
                "flags": 96,
                "start": 18,
                "end": 25
            },
            "flags": 16,
            "start": 18,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": " number",
                "flags": 96,
                "start": 27,
                "end": 34
            },
            "flags": 16,
            "start": 27,
            "end": 34
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 36,
                "end": 36
            },
            "flags": 16,
            "start": 34,
            "end": 38
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 40,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "x = { method(test: string): number { } };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 17, end: 18
✖ Unexpected token. - start: 17, end: 18
✖ ',' expected - start: 17, end: 18
✖ Expected a `;` - start: 17, end: 18
✖ Statement expected - start: 17, end: 18
✖ Expected a `;` - start: 25, end: 26
✖ Statement expected - start: 25, end: 26
✖ Statement expected - start: 26, end: 27
✖ Expected a `;` - start: 34, end: 36
✖ Statement expected - start: 38, end: 40

```

