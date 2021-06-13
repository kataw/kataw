# Kataw parser test case

## Input

`````js
<A extends B>(x) => {}
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
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 0,
                    "end": 0
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "right": {
                    "kind": 134299649,
                    "text": "A",
                    "rawText": "A",
                    "flags": 96,
                    "start": 1,
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "B",
                    "rawText": "B",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 12,
                    "end": 13
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 16,
                        "end": 19
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 22
                },
                "flags": 32,
                "start": 10,
                "end": 22
            },
            "flags": 16,
            "start": 10,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "<A extends B>(x) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 3, end: 10
✖ Identifier expected - start: 0, end: 1
✖ Expected a `;` - start: 2, end: 10
✖ Expected a `;` - start: 16, end: 19

```

