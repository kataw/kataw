# Kataw parser test case

## Input

`````js
_ => {}
/foo
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1,
                    "end": 4
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "_",
                    "rawText": "_",
                    "flags": 96,
                    "start": 0,
                    "end": 1
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
                        "start": 6,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/foo",
                "flags": 96,
                "start": 7,
                "end": 12
            },
            "flags": 16,
            "start": 7,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "_ => {}\n/foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

_ =>  {};
/foo;
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 7, end: 9

```

