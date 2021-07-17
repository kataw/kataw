# Kataw parser test case

## Input

`````js
for ({...a.b} in c) ;
for (let {...a.b} in c);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 224,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 9
                            },
                            "argument": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 10
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 5,
                "end": 13
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 21,
                "end": 25
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 30
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 35
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 36
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 0,
                                            "transformFlags": 4096,
                                            "start": 32,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 36
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 36
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 30,
                            "end": 36
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 36
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 21,
                "end": 36
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 38,
                "end": 38
            },
            "incrementor": {
                "kind": 129,
                "member": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 36
                },
                "expression": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 38
                },
                "flags": 96,
                "transformFlags": 2,
                "start": 36,
                "end": 38
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 38
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 38,
                "end": 38
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 21,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 42
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 39,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 45,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "for ({...a.b} in c) ;\nfor (let {...a.b} in c);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 36, end: 37
✖ The parser expected to find a '}' to match the '{' token here - start: 36, end: 37
✖ Missing initializer in destructuring declaration - start: 36, end: 37
✖ Lexical declaration expected - start: 36, end: 37
✖ Identifier expected - start: 38, end: 39
✖ Identifier expected - start: 39, end: 42
✖ '; ' expected - start: 44, end: 45

```

