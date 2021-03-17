# Kataw parser test case

## Input

`````js
let foo = "bar";
let {[foo]: bar} = {bar: "bar"};

let {["bar"]: bar2} = {bar: "bar"};

let foo2 = () => "bar";
let {[foo2()]: bar3} = {bar: "bar"};

let [{[foo]: bar4}] = [{bar: "bar"}];
let [{[foo2()]: bar5}] = [{bar: "bar"}];

function f1({["bar"]: x}: { bar: number }) {}
function f2({[foo]: x}: { bar: number }) {}
function f3({[foo2()]: x}: { bar: number }) {}
function f4([{[foo]: x}]: [{ bar: number }]) {}
function f5([{[foo2()]: x}]: [{ bar: number }]) {}

// report errors on type errors in computed properties used in destructuring
let [{[foo()]: bar6}] = [{bar: "bar"}];
let [{[foo.toExponential()]: bar7}] = [{bar: "bar"}];

// destructuring assignment
({[foo]: bar} = {bar: "bar"});

({["bar"]: bar2} = {bar: "bar"});

({[foo2()]: bar3} = {bar: "bar"});

[{[foo]: bar4}] = [{bar: "bar"}];
[{[foo2()]: bar5}] = [{bar: "bar"}];

[{[foo()]: bar4}] = [{bar: "bar"}];
[{[(1 + {})]: bar4}] = [{bar: "bar"}];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let foo = \"bar\";\nlet {[foo]: bar} = {bar: \"bar\"};\n\nlet {[\"bar\"]: bar2} = {bar: \"bar\"};\n\nlet foo2 = () => \"bar\";\nlet {[foo2()]: bar3} = {bar: \"bar\"};\n\nlet [{[foo]: bar4}] = [{bar: \"bar\"}];\nlet [{[foo2()]: bar5}] = [{bar: \"bar\"}];\n\nfunction f1({[\"bar\"]: x}: { bar: number }) {}\nfunction f2({[foo]: x}: { bar: number }) {}\nfunction f3({[foo2()]: x}: { bar: number }) {}\nfunction f4([{[foo]: x}]: [{ bar: number }]) {}\nfunction f5([{[foo2()]: x}]: [{ bar: number }]) {}\n\n// report errors on type errors in computed properties used in destructuring\nlet [{[foo()]: bar6}] = [{bar: \"bar\"}];\nlet [{[foo.toExponential()]: bar7}] = [{bar: \"bar\"}];\n\n// destructuring assignment\n({[foo]: bar} = {bar: \"bar\"});\n\n({[\"bar\"]: bar2} = {bar: \"bar\"});\n\n({[foo2()]: bar3} = {bar: \"bar\"});\n\n[{[foo]: bar4}] = [{bar: \"bar\"}];\n[{[foo2()]: bar5}] = [{bar: \"bar\"}];\n\n[{[foo()]: bar4}] = [{bar: \"bar\"}];\n[{[(1 + {})]: bar4}] = [{bar: \"bar\"}];",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261583,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 15
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 16
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 26
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 131073,
                                            "start": 22,
                                            "end": 27
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 28,
                                            "end": 32
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 22,
                                        "end": 32
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 22,
                                "end": 32
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 20,
                            "end": 33
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 40
                                        },
                                        "right": {
                                            "kind": 4261583,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 47
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 47
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 48
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 48
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 48
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 16,
            "end": 49
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 62
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 131073,
                                            "start": 56,
                                            "end": 63
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "bar2",
                                                "rawText": "bar2",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 64,
                                                "end": 69
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 64,
                                            "end": 69
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 56,
                                        "end": 69
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 56,
                                "end": 69
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 54,
                            "end": 70
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 74,
                                            "end": 77
                                        },
                                        "right": {
                                            "kind": 4261583,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 84
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 74,
                                        "end": 84
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 74,
                                "end": 84
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 85
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 85
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 49,
                "end": 85
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 49,
            "end": 86
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "foo2",
                            "rawText": "foo2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 91,
                            "end": 96
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 98
                            },
                            "contents": {
                                "kind": 4261583,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 104,
                                "end": 110
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 98,
                            "end": 110
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 91,
                        "end": 110
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 86,
                "end": 110
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 86,
            "end": 111
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "foo2",
                                                    "rawText": "foo2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 118,
                                                    "end": 122
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 124,
                                                    "end": 124
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 122,
                                                "end": 124
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 131073,
                                            "start": 117,
                                            "end": 125
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "bar3",
                                                "rawText": "bar3",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 126,
                                                "end": 131
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 126,
                                            "end": 131
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 117,
                                        "end": 131
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 117,
                                "end": 131
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 115,
                            "end": 132
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 136,
                                            "end": 139
                                        },
                                        "right": {
                                            "kind": 4261583,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 140,
                                            "end": 146
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 136,
                                        "end": 146
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 136,
                                "end": 146
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 134,
                            "end": 147
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 115,
                        "end": 147
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 111,
                "end": 147
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 111,
            "end": 148
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 157,
                                                                "end": 160
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 156,
                                                            "end": 161
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "bar4",
                                                                "rawText": "bar4",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 162,
                                                                "end": 167
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 162,
                                                            "end": 167
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 156,
                                                        "end": 167
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 156,
                                                "end": 167
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 155,
                                            "end": 168
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 155,
                                        "end": 168
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 155,
                                "end": 168
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 153,
                            "end": 169
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 174,
                                                        "end": 177
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 178,
                                                        "end": 184
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 174,
                                                    "end": 184
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 174,
                                            "end": 184
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 185
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 185
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 171,
                            "end": 186
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 153,
                        "end": 186
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 148,
                "end": 186
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 148,
            "end": 187
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 1073807915,
                                                                "expression": {
                                                                    "kind": 196712,
                                                                    "text": "foo2",
                                                                    "rawText": "foo2",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 195,
                                                                    "end": 199
                                                                },
                                                                "typeArguments": null,
                                                                "argumentList": {
                                                                    "kind": 3,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "transformFlags": 0,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "start": 201,
                                                                    "end": 201
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 199,
                                                                "end": 201
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 194,
                                                            "end": 202
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "bar5",
                                                                "rawText": "bar5",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 203,
                                                                "end": 208
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 203,
                                                            "end": 208
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 194,
                                                        "end": 208
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 194,
                                                "end": 208
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 193,
                                            "end": 209
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 193,
                                        "end": 209
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 193,
                                "end": 209
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 191,
                            "end": 210
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 215,
                                                        "end": 218
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 219,
                                                        "end": 225
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 215,
                                                    "end": 225
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 215,
                                            "end": 225
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 214,
                                        "end": 226
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 214,
                                "end": 226
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 212,
                            "end": 227
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 191,
                        "end": 227
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 187,
                "end": 227
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 187,
            "end": 228
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f1",
                "rawText": "f1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 238,
                "end": 241
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 244,
                                                "end": 249
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 131073,
                                            "start": 243,
                                            "end": 250
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 251,
                                                "end": 253
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 251,
                                            "end": 253
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 243,
                                        "end": 253
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 243,
                                "end": 253
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 242,
                            "end": 254
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 257,
                                            "end": 261
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 262,
                                            "end": 269
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 257,
                                        "end": 269
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 257,
                                "end": 271
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 255,
                            "end": 271
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 242,
                        "end": 271
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 242,
                "end": 272
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 274,
                    "end": 274
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 272,
                "end": 275
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 228,
            "end": 275
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f2",
                "rawText": "f2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 284,
                "end": 287
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 290,
                                                "end": 293
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 131073,
                                            "start": 289,
                                            "end": 294
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 295,
                                                "end": 297
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 295,
                                            "end": 297
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 289,
                                        "end": 297
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 289,
                                "end": 297
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 288,
                            "end": 298
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 301,
                                            "end": 305
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 306,
                                            "end": 313
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 301,
                                        "end": 313
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 301,
                                "end": 315
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 299,
                            "end": 315
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 288,
                        "end": 315
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 288,
                "end": 316
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 318,
                    "end": 318
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 316,
                "end": 319
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 275,
            "end": 319
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f3",
                "rawText": "f3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 328,
                "end": 331
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "foo2",
                                                    "rawText": "foo2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 334,
                                                    "end": 338
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 340,
                                                    "end": 340
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 338,
                                                "end": 340
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 131073,
                                            "start": 333,
                                            "end": 341
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 342,
                                                "end": 344
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 342,
                                            "end": 344
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 333,
                                        "end": 344
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 333,
                                "end": 344
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 332,
                            "end": 345
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 348,
                                            "end": 352
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 353,
                                            "end": 360
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 348,
                                        "end": 360
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 348,
                                "end": 362
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 346,
                            "end": 362
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 332,
                        "end": 362
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 332,
                "end": 363
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 365
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 363,
                "end": 366
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 319,
            "end": 366
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f4",
                "rawText": "f4",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 375,
                "end": 378
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 382,
                                                                "end": 385
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 381,
                                                            "end": 386
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 387,
                                                                "end": 389
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 387,
                                                            "end": 389
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 381,
                                                        "end": 389
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 381,
                                                "end": 389
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 380,
                                            "end": 390
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 380,
                                        "end": 390
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 380,
                                "end": 390
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 379,
                            "end": 391
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226144,
                            "elementTypes": [
                                {
                                    "kind": 536879334,
                                    "objectTypeMembers": {
                                        "kind": 536871081,
                                        "members": [
                                            {
                                                "kind": 8380,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 395,
                                                    "end": 399
                                                },
                                                "isOptional": false,
                                                "accessModifier": null,
                                                "type": {
                                                    "kind": 4202657,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 400,
                                                    "end": 407
                                                },
                                                "isStatic": false,
                                                "isReadOnly": false,
                                                "initializer": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 395,
                                                "end": 407
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 395,
                                        "end": 409
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 394,
                                    "end": 409
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 392,
                            "end": 410
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 379,
                        "end": 410
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 379,
                "end": 411
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 413,
                    "end": 413
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 411,
                "end": 414
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 366,
            "end": 414
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f5",
                "rawText": "f5",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 423,
                "end": 426
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 1073807915,
                                                                "expression": {
                                                                    "kind": 196712,
                                                                    "text": "foo2",
                                                                    "rawText": "foo2",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 430,
                                                                    "end": 434
                                                                },
                                                                "typeArguments": null,
                                                                "argumentList": {
                                                                    "kind": 3,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "transformFlags": 0,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "start": 436,
                                                                    "end": 436
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 434,
                                                                "end": 436
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 429,
                                                            "end": 437
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 438,
                                                                "end": 440
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 438,
                                                            "end": 440
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 429,
                                                        "end": 440
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 429,
                                                "end": 440
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 428,
                                            "end": 441
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 428,
                                        "end": 441
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 428,
                                "end": 441
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 427,
                            "end": 442
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226144,
                            "elementTypes": [
                                {
                                    "kind": 536879334,
                                    "objectTypeMembers": {
                                        "kind": 536871081,
                                        "members": [
                                            {
                                                "kind": 8380,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 446,
                                                    "end": 450
                                                },
                                                "isOptional": false,
                                                "accessModifier": null,
                                                "type": {
                                                    "kind": 4202657,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 451,
                                                    "end": 458
                                                },
                                                "isStatic": false,
                                                "isReadOnly": false,
                                                "initializer": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 446,
                                                "end": 458
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 446,
                                        "end": 460
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 445,
                                    "end": 460
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 443,
                            "end": 461
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 427,
                        "end": 461
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 427,
                "end": 462
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 464,
                    "end": 464
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 462,
                "end": 465
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 414,
            "end": 465
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 1073807915,
                                                                "expression": {
                                                                    "kind": 196712,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 551,
                                                                    "end": 554
                                                                },
                                                                "typeArguments": null,
                                                                "argumentList": {
                                                                    "kind": 3,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "transformFlags": 0,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "start": 556,
                                                                    "end": 556
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 554,
                                                                "end": 556
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 550,
                                                            "end": 557
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "bar6",
                                                                "rawText": "bar6",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 558,
                                                                "end": 563
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 558,
                                                            "end": 563
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 550,
                                                        "end": 563
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 550,
                                                "end": 563
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 549,
                                            "end": 564
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 549,
                                        "end": 564
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 549,
                                "end": 564
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 547,
                            "end": 565
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 570,
                                                        "end": 573
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 574,
                                                        "end": 580
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 570,
                                                    "end": 580
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 570,
                                            "end": 580
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 569,
                                        "end": 581
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 569,
                                "end": 581
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 567,
                            "end": 582
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 547,
                        "end": 582
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 465,
                "end": 582
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 465,
            "end": 583
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 65591,
                                                            "expression": {
                                                                "kind": 1073807915,
                                                                "expression": {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 196712,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 591,
                                                                        "end": 594
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "toExponential",
                                                                        "rawText": "toExponential",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 595,
                                                                        "end": 608
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 594,
                                                                    "end": 608,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 594,
                                                                        "end": 595
                                                                    }
                                                                },
                                                                "typeArguments": null,
                                                                "argumentList": {
                                                                    "kind": 3,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "transformFlags": 0,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "start": 610,
                                                                    "end": 610
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 608,
                                                                "end": 610
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 131073,
                                                            "start": 590,
                                                            "end": 611
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "bar7",
                                                                "rawText": "bar7",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 612,
                                                                "end": 617
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 612,
                                                            "end": 617
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 590,
                                                        "end": 617
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 590,
                                                "end": 617
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 589,
                                            "end": 618
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 589,
                                        "end": 618
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 589,
                                "end": 618
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 587,
                            "end": 619
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 624,
                                                        "end": 627
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 628,
                                                        "end": 634
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 624,
                                                    "end": 634
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 624,
                                            "end": 634
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 623,
                                        "end": 635
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 623,
                                "end": 635
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 621,
                            "end": 636
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 587,
                        "end": 636
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 583,
                "end": 636
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 583,
            "end": 637
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 65591,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 670,
                                            "end": 673
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 131073,
                                        "start": 669,
                                        "end": 674
                                    },
                                    "right": {
                                        "kind": 196712,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 675,
                                        "end": 679
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 669,
                                    "end": 679
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 669,
                            "end": 679
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 668,
                        "end": 680
                    },
                    "operator": "=",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 684,
                                        "end": 687
                                    },
                                    "right": {
                                        "kind": 4261583,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 688,
                                        "end": 694
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 684,
                                    "end": 694
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 684,
                            "end": 694
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 682,
                        "end": 695
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 637,
                    "end": 695
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 637,
                "end": 696
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 637,
            "end": 697
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 65591,
                                        "expression": {
                                            "kind": 4261583,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 702,
                                            "end": 707
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 131073,
                                        "start": 701,
                                        "end": 708
                                    },
                                    "right": {
                                        "kind": 196712,
                                        "text": "bar2",
                                        "rawText": "bar2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 709,
                                        "end": 714
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 701,
                                    "end": 714
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 701,
                            "end": 714
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 700,
                        "end": 715
                    },
                    "operator": "=",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 719,
                                        "end": 722
                                    },
                                    "right": {
                                        "kind": 4261583,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 723,
                                        "end": 729
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 719,
                                    "end": 729
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 719,
                            "end": 729
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 717,
                        "end": 730
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 697,
                    "end": 730
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 697,
                "end": 731
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 697,
            "end": 732
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 65591,
                                        "expression": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "foo2",
                                                "rawText": "foo2",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 737,
                                                "end": 741
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 743,
                                                "end": 743
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 741,
                                            "end": 743
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 131073,
                                        "start": 736,
                                        "end": 744
                                    },
                                    "right": {
                                        "kind": 196712,
                                        "text": "bar3",
                                        "rawText": "bar3",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 745,
                                        "end": 750
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 736,
                                    "end": 750
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 736,
                            "end": 750
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 735,
                        "end": 751
                    },
                    "operator": "=",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 755,
                                        "end": 758
                                    },
                                    "right": {
                                        "kind": 4261583,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 759,
                                        "end": 765
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 755,
                                    "end": 765
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 755,
                            "end": 765
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 753,
                        "end": 766
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 732,
                    "end": 766
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 732,
                "end": 767
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 732,
            "end": 768
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 65591,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 773,
                                                    "end": 776
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 131073,
                                                "start": 772,
                                                "end": 777
                                            },
                                            "right": {
                                                "kind": 196712,
                                                "text": "bar4",
                                                "rawText": "bar4",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 778,
                                                "end": 783
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 772,
                                            "end": 783
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 772,
                                    "end": 783
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 771,
                                "end": 784
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 771,
                        "end": 784
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 768,
                    "end": 785
                },
                "operator": "=",
                "right": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 790,
                                                "end": 793
                                            },
                                            "right": {
                                                "kind": 4261583,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 794,
                                                "end": 800
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 790,
                                            "end": 800
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 790,
                                    "end": 800
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 789,
                                "end": 801
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 789,
                        "end": 801
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 787,
                    "end": 802
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 768,
                "end": 802
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 768,
            "end": 803
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 65591,
                                                "expression": {
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "foo2",
                                                        "rawText": "foo2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 807,
                                                        "end": 811
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "start": 813,
                                                        "end": 813
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 811,
                                                    "end": 813
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 131073,
                                                "start": 806,
                                                "end": 814
                                            },
                                            "right": {
                                                "kind": 196712,
                                                "text": "bar5",
                                                "rawText": "bar5",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 815,
                                                "end": 820
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 806,
                                            "end": 820
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 806,
                                    "end": 820
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 805,
                                "end": 821
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 805,
                        "end": 821
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 803,
                    "end": 822
                },
                "operator": "=",
                "right": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 827,
                                                "end": 830
                                            },
                                            "right": {
                                                "kind": 4261583,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 831,
                                                "end": 837
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 827,
                                            "end": 837
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 827,
                                    "end": 837
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 826,
                                "end": 838
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 826,
                        "end": 838
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 824,
                    "end": 839
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 803,
                "end": 839
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 803,
            "end": 840
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 65591,
                                                "expression": {
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 845,
                                                        "end": 848
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "start": 850,
                                                        "end": 850
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 848,
                                                    "end": 850
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 131073,
                                                "start": 844,
                                                "end": 851
                                            },
                                            "right": {
                                                "kind": 196712,
                                                "text": "bar4",
                                                "rawText": "bar4",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 852,
                                                "end": 857
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 844,
                                            "end": 857
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 844,
                                    "end": 857
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 843,
                                "end": 858
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 843,
                        "end": 858
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 840,
                    "end": 859
                },
                "operator": "=",
                "right": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 864,
                                                "end": 867
                                            },
                                            "right": {
                                                "kind": 4261583,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 868,
                                                "end": 874
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 864,
                                            "end": 874
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 864,
                                    "end": 874
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 863,
                                "end": 875
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 863,
                        "end": 875
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 861,
                    "end": 876
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 840,
                "end": 876
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 840,
            "end": 877
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 65591,
                                                "expression": {
                                                    "kind": 66224,
                                                    "expression": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 882,
                                                            "end": 883
                                                        },
                                                        "operator": "+",
                                                        "right": {
                                                            "kind": 98984,
                                                            "propertyList": {
                                                                "kind": 65722,
                                                                "properties": [],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 887,
                                                                "end": 887
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 885,
                                                            "end": 888
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 882,
                                                        "end": 888
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 881,
                                                    "end": 889
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 131073,
                                                "start": 880,
                                                "end": 890
                                            },
                                            "right": {
                                                "kind": 196712,
                                                "text": "bar4",
                                                "rawText": "bar4",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 891,
                                                "end": 896
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 880,
                                            "end": 896
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 880,
                                    "end": 896
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 879,
                                "end": 897
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 879,
                        "end": 897
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 877,
                    "end": 898
                },
                "operator": "=",
                "right": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 903,
                                                "end": 906
                                            },
                                            "right": {
                                                "kind": 4261583,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 907,
                                                "end": 913
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 903,
                                            "end": 913
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 903,
                                    "end": 913
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 902,
                                "end": 914
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 902,
                        "end": 914
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 900,
                    "end": 915
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 877,
                "end": 915
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 877,
            "end": 916
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 916
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

