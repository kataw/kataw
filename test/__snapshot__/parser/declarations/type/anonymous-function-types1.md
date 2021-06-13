# Kataw parser test case

## Input

`````js
declare function foo(x: number, string): void;
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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 21,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 23,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 30
                        },
                        "right": null,
                        "flags": 32,
                        "start": 21,
                        "end": 30
                    },
                    {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 31,
                        "end": 38
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 39
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 40,
                    "end": 45
                },
                "flags": 32,
                "start": 7,
                "end": 45
            },
            "flags": 4112,
            "start": 7,
            "end": 45
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 45,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "declare function foo(x: number, string): void;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

function foo(x, string);

```

### Diagnostics

```javascript
✔ No errors
```

