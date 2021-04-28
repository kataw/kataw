# Kataw parser test case

## Input

`````js
class K extends {} {;async\n async *1(){}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "K",
                "rawText": "K",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 18
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 18
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 20,
                        "end": 21
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 21,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 21,
                        "end": 26
                    }
                ],
                "flags": 32,
                "start": 20,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 27,
                "end": 28
            },
            "flags": 16,
            "start": 27,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 28,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 34,
                    "end": 36
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 36,
                        "end": 37
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 36,
                    "end": 39
                },
                "flags": 32,
                "start": 28,
                "end": 39
            },
            "flags": 16,
            "start": 28,
            "end": 39
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 16,
                "start": 40,
                "end": 40
            },
            "flags": 16,
            "start": 39,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "class K extends {} {;async\\n async *1(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 21, end: 26
✖ Invalid hexadecimal escape sequence - start: 26, end: 26
✖ Statement expected - start: 26, end: 27
✖ Statement expected - start: 41, end: 42

```

